import { Sparkles, Lightbulb } from "lucide-react";

function Recommendation({ recommendation }) {
  return (
    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-700 rounded-3xl p-8 shadow-lg">

      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
          <Sparkles className="text-white" size={26} />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Recommendation
          </h2>

          <p className="text-slate-300">
            Personalized advice to improve your interview performance.
          </p>

        </div>

      </div>

      <div className="bg-[#0F172A] rounded-2xl border border-slate-700 p-6">

        <div className="flex items-start gap-4">

          <Lightbulb
            className="text-yellow-400 mt-1"
            size={24}
          />

          <p className="text-slate-200 leading-8 text-lg">
            {recommendation}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Recommendation;