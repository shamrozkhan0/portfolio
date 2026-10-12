import { contact, faqs, person, projects, siteUrl } from "@/data/portfolio";

// GEO: a plain-text summary that AI assistants and answer engines can read.
export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${person.name}`,
    `> ${person.description}`,
    "",
    "## Projects",
    ...projects.map((p) => `- [${p.name}](${siteUrl}/projects/${p.slug}): ${p.tagline}`),
    "",
    "## About",
    ...faqs.map((f) => `**${f.q}** ${f.a}`),
    "",
    "## Contact",
    `- Email: ${contact.email}`,
    `- WhatsApp: ${contact.whatsapp}`,
    `- Upwork: ${contact.upwork}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- GitHub: ${contact.github}`,
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
