import Link from "next/link";
import { person } from "@/data/portfolio";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">{person.name}</Link>
        <nav aria-label="Main">
          <Link href="/projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contact" className="nav-cta">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
