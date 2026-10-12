import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function ProjectList() {
  return (
    <ul className="project-list">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Reveal delay={i * 0.06}>
            <Link href={`/projects/${p.slug}`} className="project-row">
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <span className="tags">{p.skills.slice(0, 4).join(", ")}</span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
