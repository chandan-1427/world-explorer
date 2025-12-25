export function GlobalLoadingBar({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 h-[3px] transition-all duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-full w-full bg-blue-600 animate-[shimmer_2s_infinite] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-[length:200%_100%]" />
    </div>
  );
}