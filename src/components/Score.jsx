import { motion } from "framer-motion";

export default function ScoreCircle({ score }) {
  const radius = 80; // ⬅️ Bigger circle
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const getColor = () => {
    if (score > 75) return "#22c55e";
    if (score > 50) return "#eab308";
    return "#ef4444";
  };

  const getLabel = () => {
    if (score > 80) return "🔥 Excellent Match";
    if (score > 60) return "🚀 Strong Match";
    return "⚠️ Needs Improvement";
  };

  return (
    <div className="flex flex-col items-center justify-center">

      <div className="relative flex items-center justify-center">

        {/* Glow */}
        <div
          className="absolute w-60 h-60 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: getColor() }}
        />

        {/* Circle */}
        <svg height={200} width={200} className="rotate-[-90deg]">
          <circle
            stroke="#1f2937"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="100"
            cy="100"
          />

          <motion.circle
            stroke={getColor()}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            r={normalizedRadius}
            cx="100"
            cy="100"
            animate={{
              strokeDashoffset:
                circumference - (score / 100) * circumference,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Score Text */}
        <div
          className="absolute flex items-end justify-center gap-1 font-extrabold tracking-tight"
          style={{
            background: `linear-gradient(135deg, ${getColor()}, #a78bfa)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px rgba(255,255,255,0.15)",
          }}
        >
          <span className="text-4xl leading-none">{score}</span>
          <span className="text-4xl leading-none">%</span>
        </div>

      </div>

      {/* Label */}
      <p className="mt-5 text-gray-300 text-sm uppercase tracking-widest">
        Match Score
      </p>

      {/* Badge */}
      <div className="mt-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-wide backdrop-blur">
        {getLabel()}
      </div>
    </div>
  );
}