import { Link } from "react-router";

export function CountryNavigation() {
  return (
    <Link
      to="/countries"
      className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors mb-8"
    >
      <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Directory
    </Link>
  );
}
