import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | World Explorer" },
    {
      name: "description",
      content:
        "Learn about World Explorer, its purpose, data sources, privacy approach, and the technology behind the platform.",
    },
  ];
}

export default function About() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 sm:py-24">
        
        <header className="mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-100 rounded-full">
            Project Overview
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-slate-900">
            Know Your <span className="text-blue-600">World.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            World Explorer is a high-performance web discovery tool designed to 
            provide structured, real-time access to global country data through 
            a focused and accessible interface.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-hover hover:shadow-md">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Purpose
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built for students, developers, and travelers who need country-level info 
              without the noise of traditional search engines. We prioritize speed and 
              clarity above all else.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="text-slate-800 font-semibold">Note: </span>
                This platform focuses on country-level reference data, not live geopolitical or economic forecasting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-hover hover:shadow-md">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-600">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Data & Accuracy
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Information is pulled from public GraphQL datasets. While we strive for 
              freshness, these datasets are for educational use and are not 
              authoritative for legal or governmental purposes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-hover hover:shadow-md">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Privacy First
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              No tracking. No cookies. No storage. Requests are handled client-side, 
              ensuring your exploration habits remain entirely your own.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-hover hover:shadow-md">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-indigo-600">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Tech Stack
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-500">
              <li className="bg-slate-50 p-2 rounded">React & TypeScript</li>
              <li className="bg-slate-50 p-2 rounded">Tailwind CSS</li>
              <li className="bg-slate-50 p-2 rounded">React Router</li>
              <li className="bg-slate-50 p-2 rounded">GraphQL APIs</li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 space-y-12">
          <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-white font-bold mb-2">Credits</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Maps powered by OpenStreetMap contributors. Country data 
                  sourced via Trevor Blades' Countries API. Built with 
                  passion for the open web.
                </p>
              </section>
              <section>
                <h3 className="text-white font-bold mb-2">Contributions</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Open for feedback and code contributions. Review the 
                  project on GitHub or reach out via developer links.
                </p>
              </section>
            </div>
          </div>

          <div className="flex justify-center px-4 w-full">
            <Link
              to="/countries"
              className="
                inline-flex items-center justify-center gap-3 
                w-full sm:w-auto px-8 py-4 sm:px-6 sm:py-3
                bg-blue-600 text-white font-bold rounded-2xl sm:rounded-full
                shadow-lg shadow-blue-200/50 
                sm:hover:bg-blue-500 
                active:scale-95 active:bg-blue-800
                transition-all duration-200
                -webkit-tap-highlight-color-transparent
              "
            >
              <span className="text-base">Start Exploring</span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}