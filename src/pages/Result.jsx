import { useLocation, useNavigate } from "react-router-dom";
import ScoreCircle from "../components/Score.jsx";
import SkillTags from "../components/Skills.jsx";
import Suggestions from "../components/Suggestion.jsx";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div>No Data</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#312e81] text-white p-6">

      {/* Score */}
      <div className="flex justify-center mb-10">
        <ScoreCircle score={state.score} />
      </div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <SkillTags title="Matched Skills" skills={state.matched} type="matched" />
        <SkillTags title="Missing Skills" skills={state.missing} type="missing" />
      </div>

      {/* Suggestions */}
      <Suggestions suggestions={state.suggestions} />

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg"
        >
          Back to Home
        </button>
      </div>

    </div>
  );
}