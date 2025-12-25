import { useState, useRef, useEffect } from "react";
import type { ContinentName } from "~/types/country";

interface Props {
  inputValue: string;
  continent: ContinentName;
  continentOptions: ContinentName[];
  onSearchChange: (value: string) => void;
  onContinentChange: (value: ContinentName) => void;
}

export function CountriesFilters({
  inputValue,
  continent,
  continentOptions,
  onSearchChange,
  onContinentChange,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative top-4 sm:top-6 z-50 mb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3 p-2 bg-white/70 backdrop-blur-xl border border-white/40 rounded-4xl shadow-2xl shadow-slate-200/60 transition-all duration-300">
        <div className="relative flex-2 group">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search countries..."
            value={inputValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-slate-100/50 border-transparent rounded-3xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium"
          />
        </div>

        <div className="relative flex-1" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full flex items-center justify-between px-6 py-4 bg-slate-100/50 rounded-3xl font-bold text-slate-700 transition-all hover:bg-slate-200/50 outline-none ring-offset-2 focus:ring-2 focus:ring-blue-500/20 ${isDropdownOpen ? 'bg-white shadow-sm ring-2 ring-blue-500/10' : ''}`}
          >
            <span className="truncate">
              {continent === "All" ? "Global (All)" : continent}
            </span>
            <svg 
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-blue-500" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-3xl shadow-2xl shadow-slate-900/10 animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="max-h-75 overflow-y-auto custom-scrollbar">
                {continentOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onContinentChange(opt);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      continent === opt 
                        ? "bg-blue-50 text-blue-600" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-all ${continent === opt ? "bg-blue-500 scale-100" : "bg-transparent scale-0"}`} />
                    {opt === "All" ? "Global (All)" : opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}