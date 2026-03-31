interface BrushDividerProps {
  from?: "dark" | "light";
  to?: "dark" | "light";
  flip?: boolean;
  className?: string;
}

const BrushDivider = ({ from = "dark", to = "light", flip = false, className = "" }: BrushDividerProps) => {
  const topColor = from === "dark" ? "hsl(0,0%,7%)" : "hsl(40,15%,93%)";
  const bottomColor = to === "dark" ? "hsl(0,0%,7%)" : "hsl(40,15%,93%)";

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}
      style={{ height: "80px", marginTop: "-1px", marginBottom: "-1px" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,0 L0,40 Q60,65 120,45 T240,50 T360,35 T480,55 T600,40 T720,60 T840,38 T960,52 T1080,42 T1200,58 T1320,36 T1440,50 L1440,0 Z"
          fill={topColor}
        />
        <path
          d="M0,80 L0,45 Q80,20 160,48 T320,35 T480,50 T640,30 T800,55 T960,32 T1120,48 T1280,38 T1440,45 L1440,80 Z"
          fill={bottomColor}
        />
        {/* Rough middle texture */}
        <path
          d="M0,42 Q100,55 200,40 T400,48 T600,36 T800,52 T1000,38 T1200,50 T1440,42"
          fill="none"
          stroke={from === "dark" ? "hsl(0,0%,20%)" : "hsl(40,10%,78%)"}
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default BrushDivider;
