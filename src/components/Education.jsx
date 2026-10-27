import { FaGraduationCap, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { education } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="section-title"><FaGraduationCap className="mr-3 inline text-brand" />Education</h2>
      <p className="mt-6 max-w-2xl text-slate-600">
        A Computer Science student with a completed diploma, now continuing into the degree programme.
      </p>

      <ol className="relative mt-10 space-y-8 border-l-2 border-brand/30 pl-8">
        {education.map((e) => (
          <li key={e.title} className="relative">
            <span className={`absolute -left-[2.8rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-paper ${e.current ? "bg-brand" : "bg-emerald-500"}`} />
            <div className="card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <FaUniversity className="text-3xl text-brand" />
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${e.current ? "bg-brand-soft text-brand" : "bg-emerald-50 text-emerald-700"}`}>
                  {!e.current && <FaCheckCircle />} {e.status}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink-900">{e.title}</h3>
              <p className="font-medium text-brand">{e.school}</p>
              <p className="mt-3 text-slate-600">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
