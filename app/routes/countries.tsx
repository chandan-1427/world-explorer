import { useMemo, useState, useTransition } from "react";
import { useNavigation } from "react-router";
import type { Route } from "./+types/countries";

import { fetchCountries } from "~/services/api";
import { useDebounce } from "~/hooks/useDebounce";
import type { Country, ContinentName } from "~/types/country";

import { CountriesHeader } from "~/components/countries/Header";
import { CountriesFilters } from "~/components/countries/Filters";
import { CountriesStatus } from "~/components/countries/Status";
import { CountriesGrid } from "~/components/countries/Grid";
import { SkeletonGrid } from "~/components/countries/SkeletonGrid";

export async function clientLoader(): Promise<Country[]> {
  return fetchCountries();
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isRouteLoading = navigation.state === "loading";

  const [inputValue, setInputValue] = useState("");
  const [continent, setContinent] = useState<ContinentName>("All");
  const [isPending, startTransition] = useTransition();

  const debouncedSearch = useDebounce(inputValue, 200);
  const countries = (loaderData as Country[]) || [];

  const continentOptions = useMemo(() => {
    const unique = new Set(countries.map(c => c.continent.name));
    return ["All", ...Array.from(unique).sort()] as ContinentName[];
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesContinent = continent === "All" || c.continent.name === continent;
      return matchesSearch && matchesContinent;
    });
  }, [countries, debouncedSearch, continent]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <CountriesHeader />

        <CountriesFilters
          inputValue={inputValue}
          continent={continent}
          continentOptions={continentOptions}
          onSearchChange={setInputValue}
          onContinentChange={(v) => startTransition(() => setContinent(v))}
        />

        <CountriesStatus
          count={filteredCountries.length}
          isPending={isPending}
        />

        {isRouteLoading ? (
          <SkeletonGrid />
        ) : filteredCountries.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-lg font-bold text-slate-900">No matches found</p>
          </div>
        ) : (
          <CountriesGrid countries={filteredCountries} />
        )}
      </div>
    </main>
  );
}
