export function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
        {label}
      </p>
      <p className="text-slate-900 font-bold">{value || "Not available"}</p>
    </div>
  );
}
