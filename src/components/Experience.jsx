import { FaBriefcase } from "react-icons/fa";
import Icon from "./icons.jsx";
import { experiences } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="section-title"><FaBriefcase className="mr-3 inline text-brand" />Experience</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((x) => (
          <article key={x.title} className="card flex flex-col">
            <Icon name={x.icon} className="text-4xl text-brand" />
            <h3 className="mt-4 text-xl font-bold text-ink-900">{x.title}</h3>
            <p className="font-medium text-brand">{x.company}</p>
            <p className="text-sm text-slate-500">{x.period}</p>
            <p className="my-4 text-slate-700">{x.description}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {x.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}