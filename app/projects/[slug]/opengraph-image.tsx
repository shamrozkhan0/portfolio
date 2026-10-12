import { ogCard } from "@/lib/og";
import { getProject } from "@/data/portfolio";

export const alt = "Project by Shamroz Khan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return ogCard(p?.name ?? "Project", p?.tagline ?? "");
}
