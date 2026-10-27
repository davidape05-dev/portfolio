import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCode, FaRegPaperPlane } from "react-icons/fa";
import { profile } from "../data.js";

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-ink-800 to-ink-700 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <p className="text-xl text-[#9ab3d1]">{greeting()}, I'm</p>
          <h1 className="my-2 text-5xl font-bold leading-tight sm:text-6xl">{profile.name}</h1>
          <p className="text-2xl text-slate-300">{profile.title}</p>
          <p className="mx-auto my-6 max-w-lg text-lg leading-relaxed md:mx-0">{profile.bio}</p>

          <ul className="my-6 space-y-2 text-lg">
            <li className="flex items-center justify-center gap-3 md:justify-start"><FaEnvelope /> {profile.email}</li>
            <li className="flex items-center justify-center gap-3 md:justify-start"><FaPhoneAlt /> {profile.phone}</li>
            <li className="flex items-center justify-center gap-3 md:justify-start"><FaMapMarkerAlt /> {profile.location}</li>
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#contact" className="btn bg-brand text-white hover:bg-brand-dark hover:shadow-lift">
              <FaRegPaperPlane /> Hire Me
            </a>
            <a href="#projects" className="btn border-2 border-brand text-white hover:bg-brand">
              <FaCode /> View Work
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/profile.jpg" alt="David Ndiga"
            className="h-56 w-56 rounded-full border-4 border-brand bg-white object-cover shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] sm:h-72 sm:w-72" />
        </div>
      </div>
    </section>
  );
}
