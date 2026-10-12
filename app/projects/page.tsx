import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import JsonLd from "@/components/JsonLd";
import { projects, siteUrl } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "AI Projects and Web Applications",
  description: "AI SaaS products, AI-powered web applications and websites built by Shamroz Khan, an AI engineer and Python application developer.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: `${siteUrl}/projects/${p.slug}` })),
  };
  return (
    <section className="section">
      <JsonLd data={ld} />
      <div className="wrap">
        <h1 className="page-title">Projects</h1>
        <p className="section-intro">AI products and websites I have designed and built.</p>
        <ProjectList />
      </div>
    </section>
  );
}
