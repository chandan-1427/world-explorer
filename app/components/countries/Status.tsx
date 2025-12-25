export function CountriesStatus({
  count,
  isPending,
}: {
  count: number;
  isPending: boolean;
}) {
  return (
    <section className="flex items-center gap-4 mb-8" aria-live="polite">
      <div className="h-px flex-1 bg-slate-200" />
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 px-4 whitespace-nowrap">
        {isPending ? "Filtering..." : `${count} Results Found`}
      </span>
      <div className="h-px flex-1 bg-slate-200" />
    </section>
  );
}
