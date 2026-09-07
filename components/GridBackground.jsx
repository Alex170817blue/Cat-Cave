export default function GridBackground() {
  const width = 400;
  const height = 1000;
  const vanishX = 0;
  const vanishY = 320; 

  const fanLineCount = 16;

  const topFan = Array.from({ length: fanLineCount }).map((_, i) => ({
    x1: vanishX,
    y1: vanishY,
    x2: width,
    y2: (i / (fanLineCount - 1)) * vanishY,
  }));

  const bottomFan = Array.from({ length: fanLineCount }).map((_, i) => ({
    x1: vanishX,
    y1: vanishY,
    x2: width,
    y2: vanishY + (i / (fanLineCount - 1)) * (height - vanishY),
  }));

  const horizontalCount = 14;
  const horizontalLines = Array.from({ length: horizontalCount }).map((_, i) => {
    const t = i / (horizontalCount - 1);
    return vanishY + t * t * (height - vanishY);
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* stelline */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, white, transparent)," +
            "radial-gradient(1px 1px at 90px 120px, white, transparent)," +
            "radial-gradient(1px 1px at 160px 60px, white, transparent)," +
            "radial-gradient(1px 1px at 230px 180px, white, transparent)," +
            "radial-gradient(1px 1px at 300px 40px, white, transparent)",
          backgroundRepeat: "repeat",
          backgroundSize: "250px 250px",
        }}
      />

      {/* griglia prospettica */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {[...topFan, ...bottomFan].map((l, i) => (
          <line
            key={`fan-${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#5EEAD4"
            strokeWidth="1"
            opacity="0.45"
          />
        ))}
        {horizontalLines.map((y, i) => (
          <line
            key={`h-${i}`}
            x1={vanishX}
            y1={y}
            x2={width}
            y2={y}
            stroke="#5EEAD4"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
      </svg>
    </div>
  );
}