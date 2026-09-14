import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { entities, type Locale } from '@/lib/entities';

const caption = {
  en: 'Six capabilities on one governed platform. A business can enter at any point and reach every other capability without starting again.',
  ar: 'ست قدرات على منصة واحدة محوكمة. يمكن للعمل أن يدخل من أي نقطة ويصل إلى بقية القدرات دون أن يبدأ من جديد.',
};

/** Node positions on a 400 × 400 field, six points on one ring. */
const NODES = [
  { x: 200, y: 70 },
  { x: 312.6, y: 135 },
  { x: 312.6, y: 265 },
  { x: 200, y: 330 },
  { x: 87.4, y: 265 },
  { x: 87.4, y: 135 },
];

/** Two interlocking triangles: every capability reaches every other. */
const CHORDS = [
  [0, 2],
  [2, 4],
  [4, 0],
  [1, 3],
  [3, 5],
  [5, 1],
];

function EcosystemArmature({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  return (
    <figure className="eco-figure" data-animate>
      <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
        {CHORDS.map(([a, b]) => (
          <line
            className="eco-chord"
            key={`${a}-${b}`}
            pathLength={1}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
          />
        ))}
        <circle className="eco-ring" cx="200" cy="200" r="130" pathLength={1} />
        {NODES.map((node, index) => (
          <line
            className={`eco-spoke eco-s${index + 1}`}
            key={`spoke-${index}`}
            pathLength={1}
            x1="200"
            y1="200"
            x2={node.x}
            y2={node.y}
          />
        ))}
        <g className="eco-core">
          <circle cx="200" cy="200" r="54" stroke="none" />
          <text x="200" y="197" textAnchor="middle">
            {ar ? 'ثرى' : 'THARA'}
          </text>
          <text x="200" y="215" textAnchor="middle" className="eco-core-sub">
            {ar ? 'عجمان' : 'AJMAN'}
          </text>
        </g>
        {NODES.map((node, index) => (
          <g className={`eco-node eco-n${index + 1}`} key={`node-${index}`}>
            <circle cx={node.x} cy={node.y} r="14" />
            <text x={node.x} y={node.y + 3} textAnchor="middle">
              {`0${index + 1}`}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>{caption[locale]}</figcaption>
    </figure>
  );
}

/**
 * The ecosystem as one object: an armature that holds six points, and a
 * register that names them. Hovering or focusing a record lights its
 * node, so the diagram and the list are read as the same thing.
 */
export function EcosystemComposition({ locale }: { locale: Locale }) {
  const pre = locale === 'ar' ? '/ar' : '';
  return (
    <div className="eco">
      <EcosystemArmature locale={locale} />
      <div className="ledger eco-ledger" data-reveal>
        {entities.map((entity, index) => (
          <Link
            className={`eco-row-${index + 1}`}
            href={`${pre}/ecosystem/${entity.slug}`}
            key={entity.slug}
            style={{ '--entity-accent': entity.accent } as React.CSSProperties}
          >
            <span className="index-numeral">{`0${index + 1}`}</span>
            <h3 className="ledger-name">
              {entity.name[locale]}
              <em className="ledger-meaning">{entity.eyebrow[locale]}</em>
            </h3>
            <p className="ledger-note">{entity.summary[locale]}</p>
            <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
