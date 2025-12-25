import type { CountryDetail } from "~/types/forCountry";

export function CountryLanguages({ country }: { country: CountryDetail }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <h3 className="text-lg font-black mb-6 text-slate-900 border-b border-slate-100 pb-4">
        Language Hub
      </h3>

      <div className="flex flex-wrap gap-2">
        {country.languages.map((l) => (
          <span
            key={l.name}
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold"
          >
            {l.name}
          </span>
        ))}
      </div>
    </div>
  );
}
