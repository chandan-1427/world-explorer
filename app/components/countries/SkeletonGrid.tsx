import { Shimmer } from "../ui/Shimmer";

export function SkeletonGrid() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      role="status"
      aria-label="Loading countries"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <Shimmer key={i} className="h-[200px] w-full" />
      ))}
    </div>
  );
}