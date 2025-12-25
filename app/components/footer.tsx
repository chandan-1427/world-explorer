import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="space-y-2">
          <h3 className="font-black text-xl text-slate-900">
            GraphQL Explorer
          </h3>
          <p className="text-sm text-slate-500 max-w-xs">
            An open-source initiative to democratize access to global geographical intelligence.
          </p>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} GraphQL Explorer
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex gap-6 text-sm font-bold text-slate-400"
        >
          <Link to="/countries" className="hover:text-blue-600 transition-colors">
            Explore
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            Documentation
          </Link>
        </nav>
      </div>
    </footer>
  );
}
