import type { ReactNode } from "react";

export function CountryLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">{children}</div>
    </main>
  );
}
