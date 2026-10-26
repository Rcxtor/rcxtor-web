
export default function FlowingBackground() {
  return (
    <div
      aria-hidden="true"
     className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        className="flowing-lines absolute right-[-5%] top-[-10%] h-[110vh] w-[100vw] min-w-[900px] opacity-60"
        viewBox="0 0 1200 1000"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="line-fade"
            x1="0"
            y1="0"
            x2="1200"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#9bc4a0" stopOpacity="0" />
            <stop offset="45%" stopColor="#9bc4a0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#9bc4a0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d={`M -100 ${180 + i * 48}
               C 180 ${20 + i * 48},
                 300 ${420 + i * 48},
                 620 ${260 + i * 48}
               S 1000 ${100 + i * 48},
                 1350 ${280 + i * 48}`}
            stroke="url(#line-fade)"
            strokeWidth="1"
            className={`wave wave-${i % 3}`}
            style={{ animationDelay: `${i * -1.8}s` }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-bg via-transparent to-transparent" />
    </div>
  );
}
