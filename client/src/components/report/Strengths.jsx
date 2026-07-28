import { CheckCircle2, Trophy } from "lucide-react";

function Strengths({ strengths = [] }) {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-lg">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center">
          <Trophy className="text-white" size={26} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Your Strengths
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Things you performed well during the interview
          </p>
        </div>

      </div>

      <div className="space-y-4">

        {strengths.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-2xl p-5 hover:border-green-500 transition"
          >
            <CheckCircle2
              className="text-green-400"
              size={24}
            />

            <p className="text-slate-200 text-lg">
              {item}
            </p>

          </div>
        ))}

        {strengths.length === 0 && (
          <p className="text-slate-400">
            No strengths available.
          </p>
        )}

      </div>

    </div>
  );
}

export default Strengths;