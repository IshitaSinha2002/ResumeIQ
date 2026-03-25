import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UploadPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file || !jd) {
      alert("Please upload resume and enter job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jd", jd);

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      navigate("/results", {
        state: {
          score: data.score,
          matched: data.matched_skills,
          missing: data.missing_skills,
          suggestions: [
            "💡 Add missing skills to your resume",
            "⚡ Include relevant projects",
            "🚀 Tailor resume for the job description"
          ]
        }
      });

    } catch (error) {
      console.error(error);
      alert("Server error. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center px-4">

      {/* Card */}
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
            accept=".pdf"
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
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 shadow-lg
            ${loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
            }`}
        >
          {loading ? "Analyzing..." : "Analyze Resume 🚀"}
        </button>

      </div>
    </div>
  );
}