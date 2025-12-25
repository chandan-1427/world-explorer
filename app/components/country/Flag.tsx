import { useState } from "react";
import type { ExternalCountryData } from "~/types/forCountry";
import { Shimmer } from "~/components/ui/Shimmer";

export function CountryFlag({ extra }: { extra: ExternalCountryData | null }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="md:col-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm flex items-center justify-center p-6 min-h-80 relative">
      
      {!isLoaded && (
        <Shimmer className="absolute inset-6 rounded-xl" />
      )}

      {extra?.flags.svg && (
        <img
          src={extra.flags.svg}
          alt={extra.flags.alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`
            max-w-full max-h-64 object-contain rounded-sm
            transition-all duration-500
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        />
      )}

      {!extra?.flags.svg && (
        <Shimmer className="w-full h-64 rounded-xl" />
      )}
    </div>
  );
}
