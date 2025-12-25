export function Shimmer({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-200/50 rounded-2xl border border-white/40 shadow-sm ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      {children}
    </div>
  );
}