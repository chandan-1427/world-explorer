import { Link } from "react-router";

export function CountryNavigation() {
  return (
    <Link
      to="/countries"
      className="
        group inline-flex items-center gap-2 text-sm font-bold transition-all mb-8
        text-slate-400 sm:hover:text-blue-600 
        active:text-blue-700 active:scale-95
        -webkit-tap-highlight-color-transparent
      "
    >
      <svg 
        className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-active:-translate-x-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Directory
    </Link>
  );
}