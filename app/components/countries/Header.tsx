export function CountriesHeader() {
  return (
    <header className="max-w-3xl mb-12">
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
        World Explorer
      </h1>
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
        Explore territories with data fetched from official GraphQL sources.
        Filter by region or search by country name.
      </p>
    </header>
  );
}
