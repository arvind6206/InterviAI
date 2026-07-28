import { AlertTriangle } from "lucide-react";

function Weaknesses({ weaknesses = [] }) {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-lg">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center">
          <AlertTriangle
            className="text-white"
            size={24}
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Areas to Improve
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Focus on these topics to improve future interviews.
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {weaknesses.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-2xl p-5 hover:border-red-500 transition"
          >

            <AlertTriangle
              className="text-red-400"
              size={22}
            />

            <p className="text-slate-200 text-lg">
              {item}
            </p>

          </div>
        ))}

        {weaknesses.length === 0 && (
          <p className="text-slate-400">
            Great! No weaknesses detected.
          </p>
        )}

      </div>

    </div>
  );
}

export default Weaknesses;