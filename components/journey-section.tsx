import { entities, type Locale } from '@/lib/entities';
import { journeyCopy, journeyStages } from '@/lib/journey';

const entityName = (slug: string, locale: Locale) =>
  entities.find((entity) => entity.slug === slug)?.name[locale] ?? '';

/**
 * One continuous line, seven stations. The stages are not features —
 * they are the order in which a business meets the ecosystem, and each
 * one names the capability that leads it.
 */
export function JourneySection({
  locale,
  index,
  lead,
  id = 'journey',
}: {
  locale: Locale;
  index: string;
  lead?: string;
  id?: string;
}) {
  const [line1, line2] = journeyCopy.title[locale];
  return (
    <section className="journey band band-ink" id={id} data-animate>
      <div className="shell section">
        <div className="section-kicker light">
          <span>{index}</span>
          <span>{journeyCopy.label[locale]}</span>
        </div>
        <div className="journey-heading">
          <h2>
            {line1}
            <br />
            <em>{line2}</em>
          </h2>
          <p>{lead ?? journeyCopy.lead[locale]}</p>
        </div>

        <ol className="journey-track">
          {journeyStages.map((stage, i) => (
            <li
              className="journey-step"
              key={stage.key}
              style={{ '--i': i } as React.CSSProperties}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              <i className="journey-node" aria-hidden="true" />
              <strong>{stage.name[locale]}</strong>
              <p>{stage.note[locale]}</p>
              <em>
                {journeyCopy.ledBy[locale]} {entityName(stage.lead, locale)}
              </em>
            </li>
          ))}
        </ol>

        <div className="journey-foot">
          <p>{journeyCopy.governance[locale]}</p>
        </div>
      </div>
    </section>
  );
}
