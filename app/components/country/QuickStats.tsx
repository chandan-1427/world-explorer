import type { CountryDetail, ExternalCountryData } from "~/types/forCountry";

export function CountryQuickStats({
  country,
  extra,
}: {
  country: CountryDetail;
  extra: ExternalCountryData | null;
}) {
  return (
    <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center">
      <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">
        Population
      </p>
      <h2 className="text-4xl font-black mb-6">
        {extra?.population ? extra.population.toLocaleString() : "Unknown"}
      </h2>

      <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">
        Currency
      </p>
      <h2 className="text-4xl font-black">{country.currency}</h2>
    </div>
  );
}
