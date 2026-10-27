import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Icon from "./icons.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="section-title"><FaCode className="mr-3 inline text-brand" />Projects</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className={`card flex flex-col ${p.featured ? "md:col-span-2" : ""}`}>
            <div className="flex items-center justify-between gap-3">
              <Icon name={p.icon} className="text-4xl text-brand" />
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">{p.badge}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink-900">{p.name}</h3>
            <p className="my-3 text-slate-700">{p.description}</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            {(p.live || p.code) && (
              <div className="mt-auto flex gap-6 font-semibold text-brand">
                {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><FaGithub /> Code</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><FaExternalLinkAlt className="text-sm" /> Live site</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
