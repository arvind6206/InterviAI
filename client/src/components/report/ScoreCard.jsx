import { Award, TrendingUp } from "lucide-react";

function ScoreCard({ score = 84 }) {
  const radius = 95;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  function getPerformance(score) {
    if (score >= 90) {
      return {
        title: "Outstanding 🚀",
        color: "text-green-400",
        message:
          "Exceptional performance. You are interview ready.",
      };
    }

    if (score >= 80) {
      return {
        title: "Excellent 🎉",
        color: "text-blue-400",
        message:
          "Strong technical performance with only a few areas to improve.",
      };
    }

    if (score >= 70) {
      return {
        title: "Good 👍",
        color: "text-yellow-400",
        message:
          "You have good fundamentals. Continue practicing.",
      };
    }

    return {
      title: "Needs Improvement 📚",
      color: "text-red-400",
      message:
        "Keep practicing. Every interview makes you stronger.",
    };
  }

  const performance = getPerformance(score);

  return (
    <div className="bg-[#111827] rounded-3xl border border-slate-700 shadow-xl p-10">

      <div className="flex flex-col items-center">

        {/* Award */}

        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">

          <Award size={40} className="text-white" />

        </div>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white mt-6">
          Overall Score
        </h1>

        <p className="text-slate-400 mt-2">
          Your AI Interview Performance
        </p>

        {/* Circular Progress */}

        <div className="relative mt-10 w-64 h-64">

          <svg
            height="260"
            width="260"
            className="-rotate-90"
          >

            {/* Background */}

            <circle
              stroke="#1e293b"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx="130"
              cy="130"
            />

            {/* Progress */}

            <circle
              stroke="#3b82f6"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx="130"
              cy="130"
              className="transition-all duration-[1800ms]"
            />

          </svg>

          {/* Score */}

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-6xl font-bold text-white">
              {score}
            </h2>

            <p className="text-slate-400 text-lg">
              /100
            </p>

          </div>

        </div>

        {/* Performance */}

        <h2
          className={`text-3xl font-bold mt-8 ${performance.color}`}
        >
          {performance.title}
        </h2>

        <p className="text-slate-300 mt-4 text-center max-w-2xl leading-8">

          {performance.message}

        </p>

        {/* Improvement */}

        <div className="mt-8 flex items-center gap-3 bg-slate-900 px-6 py-3 rounded-xl border border-slate-700">

          <TrendingUp
            className="text-green-400"
            size={22}
          />

          <span className="text-green-400 font-semibold">

            +12% improvement from your previous interview

          </span>

        </div>

      </div>

    </div>
  );
}

export default ScoreCard;