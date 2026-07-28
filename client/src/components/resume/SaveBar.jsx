import {
  Save,
  Download,
  Sparkles,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function SaveBar({ onSave }) {
  const resumeScore = 86;

  return (
    <div className="sticky top-8">

      <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6">

        {/* Resume Score */}

        <h2 className="text-2xl font-bold text-white">
          Resume Score
        </h2>

        <div className="mt-6 flex items-center justify-center">

          <div className="w-36 h-36 rounded-full border-[10px] border-blue-500 flex items-center justify-center">

            <div className="text-center">

              <h1 className="text-4xl font-bold text-white">
                {resumeScore}
              </h1>

              <p className="text-slate-400">
                /100
              </p>

            </div>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-6">

          <div className="w-full bg-slate-700 rounded-full h-3">

            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{
                width: `${resumeScore}%`,
              }}
            />

          </div>

        </div>

        {/* ATS */}

        <div className="mt-8">

          <div className="flex items-center gap-3">

            <FileCheck className="text-green-400" />

            <h3 className="text-lg font-semibold text-white">
              ATS Analysis
            </h3>

          </div>

          <div className="space-y-4 mt-5">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <span className="text-slate-300">
                Strong Professional Summary
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <span className="text-slate-300">
                Good Technical Skills
              </span>

            </div>

            <div className="flex items-center gap-3">

              <AlertTriangle className="text-yellow-400" />

              <span className="text-slate-300">
                Add one more project
              </span>

            </div>

            <div className="flex items-center gap-3">

              <AlertTriangle className="text-yellow-400" />

              <span className="text-slate-300">
                Add certifications
              </span>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="space-y-4 mt-10">

          <button
            onClick={onSave}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl text-white font-semibold"
          >
            <Save size={20} />
            Save Resume
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition py-3 rounded-xl text-white font-semibold"
          >
            <Download size={20} />
            Download PDF
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl text-white font-semibold"
          >
            <Sparkles size={20} />
            Improve with AI
          </button>

        </div>

      </div>

    </div>
  );
}

export default SaveBar;