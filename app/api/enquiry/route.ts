import { NextResponse } from 'next/server';
import { type Enquiry, inboxFor, validate } from '@/lib/enquiry';

export const runtime = 'nodejs';

/**
 * Enquiry intake.
 *
 * One endpoint for every site. It routes by intent, records which site
 * and page the enquiry came from — the "one relationship record" the
 * ecosystem depends on — and refuses to report success unless a
 * provider actually accepted the message.
 */
export async function POST(request: Request) {
  let input: Partial<Enquiry>;
  try {
    input = (await request.json()) as Partial<Enquiry>;
  } catch {
    return NextResponse.json({ error: 'malformed' }, { status: 400 });
  }

  // Honeypot: a hidden field only a bot fills in.
  if ((input as Record<string, unknown>).company) {
    return NextResponse.json({ ok: true, inbox: 'hello@thara.ae' });
  }

  const invalid = validate(input);
  if (invalid.length > 0) {
    return NextResponse.json(
      { error: 'invalid', fields: invalid },
      { status: 422 },
    );
  }

  const inbox = inboxFor(input.intent!);
  const record = {
    receivedAt: new Date().toISOString(),
    site: input.site ?? 'thara',
    referral: input.referral ?? null,
    locale: input.locale === 'ar' ? 'ar' : 'en',
    inbox,
    name: input.name!.trim(),
    email: input.email!.trim(),
    organisation: input.organisation?.trim() || null,
    intent: input.intent,
    message: input.message!.trim(),
  };

  const key = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM;
  if (!key || !from) {
    // No provider configured yet. Say so rather than show a thank-you
    // for a message nobody received.
    console.error('[enquiry] no mail provider configured', {
      site: record.site,
      inbox,
    });
    return NextResponse.json(
      { error: 'not_configured', inbox },
      { status: 503 },
    );
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${key}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [inbox],
        reply_to: record.email,
        subject: `${record.site} enquiry — ${record.name}`,
        text: [
          `Site: ${record.site}`,
          `Referred from: ${record.referral ?? '—'}`,
          `Language: ${record.locale}`,
          `Name: ${record.name}`,
          `Email: ${record.email}`,
          `Organisation: ${record.organisation ?? '—'}`,
          `Enquiring as: ${record.intent}`,
          '',
          record.message,
        ].join('\n'),
      }),
    });
    if (!response.ok) {
      console.error('[enquiry] provider rejected', response.status);
      return NextResponse.json(
        { error: 'send_failed', inbox },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error('[enquiry] provider unreachable', error);
    return NextResponse.json({ error: 'send_failed', inbox }, { status: 502 });
  }

  return NextResponse.json({ ok: true, inbox });
}
