import { useNavigate } from "react-router-dom";

import ScoreCard from "../components/report/ScoreCard";
import PerformanceCards from "../components/report/PerformanceCards";
import InterviewSummary from "../components/report/InterviewSummary";
import Strengths from "../components/report/Strengths";
import Weaknesses from "../components/report/Weaknesses";
import Recommendation from "../components/report/Recommendation";
import ActionButtons from "../components/report/ActionButtons";

function Report() {

  const navigate = useNavigate();

  /*
      Dummy data for now.

      Later replace this with:
      GET /api/v1/interview/:id/report
  */

  const report = {
  candidate: "Arvind Vishwkarma",

  overallScore: 84,

  technical: 82,

  communication: 91,

  confidence: 88,

  problemSolving: 76,

  totalQuestions: 10,

  duration: "18 Minutes",

  role: "Backend Developer",

  interviewDate: "28 July 2026",

  strengths: [
    "Strong React knowledge",
    "Good MongoDB understanding",
    "Clear communication",
    "Good API design",
  ],

  weaknesses: [
    "Need better System Design knowledge",
    "Explain scalability more clearly",
    "Improve behavioral answers",
    "Practice Redis concepts",
  ],

  recommendation:
    "Your fundamentals are good. Focus on System Design, Docker, Redis and scalable backend architecture.",
};

  return (
    <div className="min-h-screen bg-[#000E24]">

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-white">
            🎉 Interview Completed
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Congratulations! Here's your complete interview performance report.
          </p>

        </div>

        {/* Overall Score */}

        <ScoreCard score={report.overallScore} />

        {/* Performance */}

        <div className="mt-10">

          <PerformanceCards report={report} />

        </div>

        {/* Summary */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <InterviewSummary report={report} />

          {/* We'll build Resume Match later */}

          <div className="bg-[#111827] rounded-3xl border border-slate-700 p-8">

            <h2 className="text-2xl font-semibold text-white mb-6">

              Resume Match

            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">

                <span className="text-slate-300">
                  React
                </span>

                <span className="text-green-400">
                  ✓
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-300">
                  Node.js
                </span>

                <span className="text-green-400">
                  ✓
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-300">
                  MongoDB
                </span>

                <span className="text-green-400">
                  ✓
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Strengths & Weaknesses */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <Strengths strengths={report.strengths} />

          <Weaknesses weaknesses={report.weaknesses} />

        </div>

        {/* Recommendation */}

        <div className="mt-10">

          <Recommendation
            recommendation={report.recommendation}
          />

        </div>

        {/* Buttons */}

        <div className="mt-10">

          <ActionButtons />

        </div>

      </div>

    </div>
  );
}

export default Report;