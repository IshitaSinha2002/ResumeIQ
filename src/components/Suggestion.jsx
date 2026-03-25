export default function Suggestions({ suggestions }) {
  return (
    <div className="bg-white/5 p-6 rounded-xl backdrop-blur">
      <h2 className="text-lg font-semibold mb-4">Suggestions</h2>

      <ul className="space-y-2 text-gray-300">
        {suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}