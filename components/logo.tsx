export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-black text-white rounded-lg select-none group font-mono font-bold ${className}`}>
      {/* Geometric architectural / pixel monogram [W] */}
      <svg
        viewBox="0 0 36 36"
        fill="currentColor"
        className="w-6 h-6 text-white"
        aria-hidden="true"
      >
        {/* Modern geometric pixel-styled 'W' */}
        <rect x="4" y="6" width="5" height="18" fill="white" />
        <rect x="9" y="20" width="5" height="8" fill="white" />
        <rect x="14" y="14" width="4" height="10" fill="white" />
        <rect x="18" y="14" width="4" height="10" fill="white" />
        <rect x="22" y="20" width="5" height="8" fill="white" />
        <rect x="27" y="6" width="5" height="18" fill="white" />
        {/* Subtle geometric dot accent */}
        <rect x="16" y="8" width="4" height="4" fill="white" opacity="0.9" />
      </svg>
    </div>
  );
}
