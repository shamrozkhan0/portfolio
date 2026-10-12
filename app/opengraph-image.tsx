import { ogCard } from "@/lib/og";
import { person } from "@/data/portfolio";

export const alt = "Shamroz Khan, AI Engineer and Python Application Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogCard(person.name, person.title);
}
