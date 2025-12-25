import type { CountryDetail, ExternalCountryData } from "~/types/forCountry";

export function CountryHeader({
  country,
  extra,
}: {
  country: CountryDetail;
  extra: ExternalCountryData | null;
}) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div className="flex items-center gap-6">
        <span className="text-7xl drop-shadow-sm" role="img" aria-label="flag">
          {country.emoji}
        </span>
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">
            {country.name}
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            {extra?.subregion || country.continent.name}
          </p>
        </div>
      </div>

      {extra?.maps.googleMaps && (
        <a
          href={extra.maps.googleMaps}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-slate-700"
        >
          View on Interactive Map
        </a>
      )}
    </header>
  );
}
