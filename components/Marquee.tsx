export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  );
}
