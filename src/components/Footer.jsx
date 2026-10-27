import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="mt-12 bg-ink-900 py-8 text-center text-white">
      <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <p className="mt-3 text-sm opacity-80">Built with React, Vite &amp; Tailwind CSS by David Ndiga · Hosted on Vercel</p>
    </footer>
  );
}
