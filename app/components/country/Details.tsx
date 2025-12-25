import type { CountryDetail, ExternalCountryData } from "~/types/forCountry";
import { DetailItem } from "./DetailItem";

export function CountryDetails({
  country,
  extra,
}: {
  country: CountryDetail;
  extra: ExternalCountryData | null;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <h3 className="text-lg font-black mb-6 text-slate-900 border-b border-slate-100 pb-4">
        Government & Identity
      </h3>

      <div className="space-y-4">
        <DetailItem label="Capital City" value={country.capital} />
        <DetailItem label="Official Code" value={country.code} />
        <DetailItem label="Timezones" value={extra?.timezones[0]} />
      </div>
    </div>
  );
}
