const COLORS = {
  "background": "hsl(0, 0%, 7%)",
  "light-bg": "hsl(40, 15%, 93%)",
  "light-bg-alt": "hsl(40, 10%, 89%)",
  "charcoal-start": "hsl(0, 0%, 12%)",
  "charcoal-end": "hsl(0, 0%, 8%)",
} as const;

type ColorKey = keyof typeof COLORS;

interface BrushDividerProps {
  from?: ColorKey;
  to?: ColorKey;
  flip?: boolean;
  className?: string;
}

const BrushDivider = ({
  from = "background",
  to = "light-bg",
  flip = false,
  className = "",
}: BrushDividerProps) => {
  const topColor = COLORS[from];
  const bottomColor = COLORS[to];

  // When flipped via scaleY(-1), the SVG coordinate system is inverted.
  // The path (drawn from Y=0 downwards) moves to the visual bottom of the divider.
  // Therefore, the path must use the bottomColor, and the rect uses the topColor.
  const pathFill = flip ? bottomColor : topColor;
  const rectFill = flip ? topColor : bottomColor;

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none z-10 ${className}`}
      style={{ height: "72px", marginTop: "-1px", marginBottom: "-1px" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ transform: flip ? "scaleY(-1)" : undefined, display: "block" }}
      >
        <defs>
          <filter id="dividerNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
        </defs>
        
        {/* Base and Wave Layers */}
        <rect x="0" y="0" width="1440" height="72" fill={rectFill} />
        <path
          d="M0,0 L0,38 C180,62 360,18 540,42 C720,66 900,20 1080,40 C1260,60 1380,28 1440,36 L1440,0 Z"
          fill={pathFill}
        />

        {/* Universal Texture Overlay to seamlessly match section grain */}
        <rect x="0" y="0" width="1440" height="72" filter="url(#dividerNoise)" opacity="0.04" />
      </svg>
    </div>
  );
};

export default BrushDivider;
