import { useParams } from "react-router";
import { useCountryDetail } from "~/hooks/useCountryDetails"; // Note: ensure file name matches

import { CountryLayout } from "~/components/country/Layout";
import { CountryNavigation } from "~/components/country/Navigation";
import { CountryHeader } from "~/components/country/Header";
import { CountryFlag } from "~/components/country/Flag";
import { CountryQuickStats } from "~/components/country/QuickStats";
import { CountryDetails } from "~/components/country/Details";
import { CountryLanguages } from "~/components/country/Languages";
import { CountryStates } from "~/components/country/States";
import { SkeletonCountryDetail } from "~/components/country/SkeletonDetail";

export default function Country() {
  const { code } = useParams<{ code: string }>();
  
  const { country, extra, isLoading, isNotFound, isError, error } = useCountryDetail(code);

  if (isLoading) {
    return (
      <CountryLayout>
        <div className="space-y-6">
          <CountryNavigation />
          <SkeletonCountryDetail />
        </div>
      </CountryLayout>
    );
  }

  if (isNotFound) {
    return (
      <CountryLayout>
        <CountryNavigation />
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Country Not Found</h2>
          <p className="text-slate-500">The code "{code}" does not exist in our database.</p>
        </div>
      </CountryLayout>
    );
  }

  if (isError) {
    return (
      <CountryLayout>
        <CountryNavigation />
        <div className="py-20 text-center text-red-600">
          <p>Something went wrong: {error?.message}</p>
        </div>
      </CountryLayout>
    );
  }

  return (
    <CountryLayout>
      <CountryNavigation />
      <CountryHeader country={country!} extra={extra} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CountryFlag extra={extra} />
        <CountryQuickStats country={country!} extra={extra} />
        <CountryDetails country={country!} extra={extra} />
        <CountryLanguages country={country!} />
        <CountryStates country={country!} />
      </div>
    </CountryLayout>
  );
}