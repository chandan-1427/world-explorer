import { Shimmer } from "~/components/ui/Shimmer";

export function SkeletonCountryDetail() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Shimmer className="h-10 w-32 rounded-lg" />

      <div className="space-y-4">
        <Shimmer className="h-12 w-3/4 md:w-1/2" />
        <Shimmer className="h-6 w-1/4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Shimmer className="h-[300px] md:col-span-1 rounded-3xl" />
        
        <div className="md:col-span-2 space-y-6">
          <Shimmer className="h-[140px] w-full rounded-3xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Shimmer className="h-[200px] rounded-3xl" />
            <Shimmer className="h-[200px] rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}