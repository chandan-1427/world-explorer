type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/40 backdrop-blur-md
        border border-white/30
        shadow-sm
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0
          -translate-x-full
          animate-[shimmer_1.8s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
        "
      />
    </div>
  );
}
