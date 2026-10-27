import { FaTools } from "react-icons/fa";
import Icon from "./icons.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="section-title"><FaTools className="mr-3 inline text-brand" />Skills</h2>
      <div className="mt-10 grid gap-x-10 gap-y-8 rounded-[20px] border border-slate-200 bg-white p-8 shadow-card md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-brand">
              <Icon name={s.icon} /> {s.group}
            </h3>
            <div className="flex flex-wrap gap-3">
              {s.items.map((i) => (
                <span key={i} className="rounded-full border border-slate-200 bg-paper px-4 py-1.5 font-medium transition hover:border-brand hover:text-brand">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
