import type { Country } from "~/types/country";
import { CountryCard } from "./Card";

export function CountriesGrid({ countries }: { countries: Country[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </ul>
  );
}
