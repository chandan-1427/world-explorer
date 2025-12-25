import { useQuery } from "@tanstack/react-query";
import { fetchCountryDetail, fetchExternalCountryData } from "~/services/country";
export function useCountryDetail(code?: string) {
  const countryQuery = useQuery({
    queryKey: ["country", "detail", code],
    queryFn: () => fetchCountryDetail(code!),
    enabled: !!code,
    staleTime: 1000 * 60 * 10,
    retry: 1, 
  });

  const externalQuery = useQuery({
    queryKey: ["country", "external", code],
    queryFn: () => fetchExternalCountryData(code!),
    enabled: !!code && countryQuery.isSuccess, 
    staleTime: 1000 * 60 * 60,
  });

  const isNotFound = (countryQuery.error as any)?.status === 404;

  return {
    country: countryQuery.data ?? null,
    extra: externalQuery.data ?? null,
    isLoading: countryQuery.isPending, 
    isFetchingExtra: externalQuery.isFetching,
    isError: countryQuery.isError && !isNotFound, // General errors (500, Network)
    isNotFound,
    error: countryQuery.error || externalQuery.error,
  };
}