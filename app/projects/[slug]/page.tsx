import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactButtons from "@/components/ContactButtons";
import JsonLd from "@/components/JsonLd";
import { getProject, projects, siteUrl } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    keywords: p.keywords,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { type: "article", title: p.seoTitle, description: p.seoDescription, url: `/projects/${p.slug}` },
    twitter: { card: "summary_large_image", title: p.seoTitle, description: p.seoDescription },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === slug);
  const next = projects[(i + 1) % projects.length];
  const url = `${siteUrl}/projects/${p.slug}`;

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.name,
      headline: p.seoTitle,
      description: p.seoDescription,
      url,
      keywords: p.keywords.join(", "),
      author: { "@id": `${siteUrl}/#person` },
      audience: { "@type": "Audience", audienceType: p.madeFor },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
        { "@type": "ListItem", position: 3, name: p.name, item: url },
      ],
    },
  ];

  return (
    <article className="section">
      {ld.map((d, n) => <JsonLd key={n} data={d} />)}
      <div className="wrap narrow">
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/projects">Projects</Link>
        </nav>
        <h1 className="page-title">{p.name}</h1>
        <p className="lede">{p.tagline}</p>

        <dl className="meta">
          <div><dt>Built for</dt><dd>{p.madeFor}</dd></div>
          <div><dt>Built by</dt><dd>{p.madeBy}</dd></div>
        </dl>

        <h2>The problem</h2>
        <p>{p.thesis}</p>
        <h2>The solution</h2>
        <p>{p.solution}</p>
        <h2>What it does</h2>
        <ul className="plain">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <h2>Built with</h2>
        <ul className="chips">{p.skills.map((s) => <li key={s}>{s}</li>)}</ul>

        <div className="cta-block">
          <h2>Need something similar?</h2>
          <ContactButtons />
        </div>
        <p className="next"><Link href={`/projects/${next.slug}`}>Next project: {next.name}</Link></p>
      </div>
    </article>
  );
}
