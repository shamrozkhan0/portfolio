import { contact } from "@/data/portfolio";

export default function ContactButtons() {
  return (
    <div className="btn-row">
      <a
        className="btn btn-primary"
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me
      </a>
      <a className="btn btn-ghost" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a className="btn btn-ghost" href={contact.upwork} target="_blank" rel="noopener noreferrer">Hire on Upwork</a>
    </div>
  );
}
