import { useState } from "react";
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaRegPaperPlane, FaRegAddressCard } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data.js";

// Set VITE_FORMSPREE_ID in Vercel (Project → Settings → Environment Variables)
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

const info = [
  { icon: FaRegEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaPhoneAlt, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FaMapMarkerAlt, label: "Location", value: profile.location },
];

const field = "w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-base transition focus:border-brand focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!FORM_ID || FORM_ID === "your_form_id") {
      setStatus("error");
      setError("The contact form isn't connected yet. Please email me directly.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.map((x) => x.message).join(", ") || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="section-title"><FaRegAddressCard className="mr-3 inline text-brand" />Contact Me</h2>

      <div className="mt-10 grid gap-10 rounded-[20px] bg-white p-6 shadow-card sm:p-10 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h3 className="mb-6 text-xl font-bold text-ink-900">Let's Connect</h3>
          <div className="space-y-4">
            {info.map(({ icon: I, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl bg-paper p-4">
                <I className="w-6 text-xl text-brand" />
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">{label}</p>
                  {href ? <a href={href} className="break-all hover:text-brand">{value}</a> : <p>{value}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-6 text-3xl text-ink-900">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:-translate-y-1 hover:text-brand"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:-translate-y-1 hover:text-brand"><FaLinkedin /></a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="transition hover:-translate-y-1 hover:text-brand"><FaXTwitter /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold text-ink-900">Send a Message</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <input className={field} type="text" name="name" placeholder="Your Name" required />
            <input className={field} type="email" name="email" placeholder="Your Email" required />
            <textarea className={field} name="message" rows={5} placeholder="Your Message" required />
            {/* honeypot for spam bots */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
            <button type="submit" disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand p-4 text-lg font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60">
              <FaRegPaperPlane /> {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <div aria-live="polite">
              {status === "success" && (
                <p className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-emerald-800">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-4 text-red-800">{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
