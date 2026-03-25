import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UploadPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");

  const handleAnalyze = () => {
    navigate("/results", {
      state: {
        score: 78,
        matched: ["Python", "SQL", "Machine Learning"],
        missing: ["AWS", "Docker", "Tableau"],
        suggestions: [
          "💡 Add AWS experience to your projects",
          "⚡ Mention Tableau dashboards",
          "🚀 Include ML deployment work"
        ]
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center px-4">

      {/* Card Container */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-white mb-3">
          Resume IQ
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Match your resume with job descriptions and improve your chances instantly.
        </p>

        {/* Upload Resume */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            Upload Resume
          </label>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 cursor-pointer hover:bg-white/20 transition"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            Job Description
          </label>

          <textarea
            rows="6"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste job description here..."
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleAnalyze}
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition duration-300 shadow-lg"
        >
          Analyze Resume 🚀
        </button>

      </div>
    </div>
  );
}