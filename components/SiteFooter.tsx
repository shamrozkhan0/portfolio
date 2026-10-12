import { contact, person } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {person.name}. {person.title}.</p>
        <p>
          <a href={contact.github} rel="me noopener noreferrer" target="_blank">GitHub</a>{" "}
          <a href={contact.linkedin} rel="me noopener noreferrer" target="_blank">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
