export default function SkillsCard({ title, skills, type }) {
  const isMatched = type === "matched";

  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-xl shadow-lg border
      ${
        isMatched
          ? "bg-gradient-to-br from-green-500/10 to-green-400/5 border-green-400/20"
          : "bg-gradient-to-br from-red-500/10 to-red-400/5 border-red-400/20"
      }`}
    >
      <h2
        className={`text-lg font-semibold mb-5 tracking-wide
        ${isMatched ? "text-green-300" : "text-red-300"}`}
      >
        {isMatched ? "✔" : "✖"} {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span
            key={i}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition transform hover:scale-110
            ${
              isMatched
                ? "bg-green-500/20 text-green-300 border border-green-400/30"
                : "bg-red-500/20 text-red-300 border border-red-400/40 shadow-[0_0_12px_rgba(255,0,0,0.6)]"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}