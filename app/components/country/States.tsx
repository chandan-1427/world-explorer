import type { CountryDetail } from "~/types/forCountry";

export function CountryStates({ country }: { country: CountryDetail }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm overflow-hidden">
      <h3 className="text-lg font-black mb-6 text-slate-900 border-b border-slate-100 pb-4">
        Administrative States
      </h3>

      <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar">
        {country.states.length > 0 ? (
          <ul className="grid grid-cols-2 gap-2">
            {country.states.map((s) => (
              <li key={s.name} className="text-sm text-slate-500">
                • {s.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-400 italic">
            No states found in records.
          </p>
        )}
      </div>
    </div>
  );
}
