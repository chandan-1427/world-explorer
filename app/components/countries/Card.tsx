import { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import type { Country } from "~/types/country";
import { fetchCountryDetail } from "~/services/country";

export function CountryCard({ country }: { country: Country }) {
  const queryClient = useQueryClient();
  const detailUrl = `/countries/${country.code}`;
  const prefetched = useRef(false);

  const handlePrefetch = () => {
    if (prefetched.current) return;
    prefetched.current = true;

    queryClient.prefetchQuery({
      queryKey: ["country", "detail", country.code],
      queryFn: () => fetchCountryDetail(country.code),
      staleTime: 1000 * 60 * 5,
    });
  };

  return (
    <li className="list-none antialiased">
      <article
        onMouseEnter={handlePrefetch}
        onFocus={handlePrefetch}
        className="group relative flex flex-col h-full p-6 bg-white border border-slate-200 rounded-2xl
                   transition-all duration-300 ease-in-out
                   hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1
                   focus-within:ring-1 focus-within:ring-blue-500 focus-within:ring-offset-2"
      >
        <div className="flex justify-between items-start mb-4">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-lg">
            {country.continent.name}
          </span>
          <span className="text-xs font-mono text-slate-400 select-none">
            {country.code}
          </span>
        </div>

        <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
          <Link
            to={detailUrl}
            className="after:absolute after:inset-0 after:z-10 focus:outline-none"
          >
            {country.name}
          </Link>
        </h2>

        <p className="text-sm text-slate-500 mb-6">
          {country.capital ? (
            <>Capital: <span className="text-slate-700">{country.capital}</span></>
          ) : (
            <span className="italic">No official capital</span>
          )}
        </p>

        <div 
          className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-opacity group-hover:opacity-80" 
          aria-hidden="true"
        >
          <span>Learn More</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </article>
    </li>
  );
}

