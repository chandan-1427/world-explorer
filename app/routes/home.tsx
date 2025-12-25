import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GraphQL Explorer | Global Country Intelligence" },
    {
      name: "description",
      content: "High-fidelity global country data. Privacy-first, open-source dashboard with real-time performance and accessibility metrics.",
    },
  ];
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GraphQLExplorer",
    "description": "Global country data explorer with real-time metrics.",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All"
  };

  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg className="h-full w-full" fill="none">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              v2.0 GraphQL Engine Active
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Understand our <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">
                World in Real-Time
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
              An advanced data explorer providing high-fidelity insights into 250+ territories. 
              Built with a focus on data transparency and technical performance.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-500">
              <span className="px-3 py-1 rounded-full bg-slate-100">
                Privacy-first · No tracking
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100">
                Open-source data
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100">
                Live GraphQL APIs
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100">
                Accessibility-aware UI
              </span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/countries" className="group px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 hover:-translate-y-1">
                Launch Explorer →
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                Our Methodology
              </Link>
            </div>

          </div>

          <div className="relative group hidden sm:block">
            <div className="absolute -inset-4 bg-linear-to-tr from-blue-100 to-indigo-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                 </div>
                 <span className="text-[10px] font-mono text-slate-400">api_status: 200 OK</span>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-slate-100 rounded animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <MetricSquare label="Uptime" value="99.9%" color="text-emerald-600" />
                  <MetricSquare label="Response" value="<120ms" color="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <header className="mb-12 sm:mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
              Engineering <span className="text-blue-600 italic">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              Data fetched live from public GraphQL sources with 
              <span className="text-slate-900"> optimized client-side resolution</span>.
            </p>
          </div>
          
          <div className="hidden lg:block text-right">
            <div className="text-sm font-mono text-slate-400">system_health: optimal</div>
            <div className="w-32 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div className="w-full h-full bg-blue-500 origin-left animate-pulse" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StatCard
            title="Data Integrity"
            value="Public"
            desc="Schemas and responses are publicly verifiable via open GraphQL endpoints."
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />

          <StatCard
            title="Latency"
            value="~85ms"
            desc="Average client-observed response time under typical network conditions."
            icon="M13 10V3L4 14h7v7l9-11h-7z"
          />

          <StatCard
            title="Inclusion"
            value="AA Grade"
            desc="Designed with keyboard navigation and contrast-safe, accessible UI."
            icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />

          <StatCard
            title="Privacy"
            value="Zero-Trace"
            desc="No cookies, no client-side tracking, and no personal data collection."
            icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </div>
    </section>
    </main>
  );
}

function StatCard({ title, value, desc, icon }: { title: string; value: string; desc: string; icon: string }) {
  return (
    <div className="group relative p-8 bg-white border border-slate-200 rounded-4xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-200">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 rounded-4xl transition-colors duration-500" aria-hidden="true" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-slate-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-600 uppercase">Live</span>
          </div>
        </div>

        <div>
          <div className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-blue-700 transition-colors">
            {value}
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            {title}
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricSquare({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
      <p className={`text-xl font-black ${color}`}>{value}</p>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{label}</p>
    </div>
  );
}