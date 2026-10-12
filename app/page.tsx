import type { Metadata } from "next";
import HeroHeadline from "@/components/HeroHeadline";
import Marquee from "@/components/Marquee";
import ProjectList from "@/components/ProjectList";
import ContactButtons from "@/components/ContactButtons";
import JsonLd from "@/components/JsonLd";
import { faqs, person, skillGroups, workflow } from "@/data/portfolio";

export const metadata: Metadata = {
  title: { absolute: "Shamroz Khan | AI Engineer & Python Application Developer" },
  alternates: { canonical: "/" },
};

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const allSkills = skillGroups.flatMap((g) => g.items);

  return (
    <>
      <JsonLd data={faqLd} />

      <section className="hero">
        <div className="wrap">
          <HeroHeadline lines={person.headlineLines} />
          <div className="hero-foot">
            <p className="lede">{person.lede}</p>
            <ContactButtons />
          </div>
        </div>
      </section>

      <Marquee items={allSkills} />

      <section id="projects" className="section">
        <div className="wrap">
          <h2>Projects</h2>
          <p className="section-intro">Each one started with a real problem. Open a project to see who it was built for, the idea behind it and what it was built with.</p>
          <ProjectList />
        </div>
      </section>

      <section id="how" className="section panel">
        <div className="wrap">
          <h2>How I work</h2>
          <ol className="steps">
            {workflow.map((s, i) => (
              <li key={s.title}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="wrap">
          <h2>Skills</h2>
          <div className="skill-grid">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section panel">
        <div className="wrap narrow">
          <h2>Questions</h2>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap">
          <h2 className="contact-title">Have a business problem worth solving with AI?</h2>
          <p className="section-intro">Tell me what is slowing your team down. I will reply with a plan, not a pitch.</p>
          <ContactButtons />
        </div>
      </section>
    </>
  );
}
