import { CheckCircle2, AlertTriangle, Star } from "lucide-react";

function FeedbackCard({ feedback }) {
  if (!feedback) return null;

  const stars = Math.round(feedback.score);

  return (
    <div className="mt-8 bg-[#111827] border border-slate-700 rounded-3xl p-6 shadow-lg">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-white mb-6">
        AI Feedback
      </h2>

      {/* Stars */}

      <div className="flex gap-1 mb-5">

        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            size={22}
            className={
              index < stars
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-600"
            }
          />
        ))}

      </div>

      {/* Score */}

      <div className="text-4xl font-bold text-white mb-6">
        {feedback.score}
        <span className="text-lg text-slate-400"> / 10</span>
      </div>

      {/* Feedback */}

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

        <p className="text-slate-200 leading-8">
          {feedback.feedback}
        </p>

      </div>

      {/* Highlights */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-green-400">

          <CheckCircle2 size={20} />

          <span>
            Answer evaluated successfully
          </span>

        </div>

        <div className="flex items-center gap-3 text-yellow-400">

          <AlertTriangle size={20} />

          <span>
            Improve your explanation for higher scores.
          </span>

        </div>

      </div>

    </div>
  );
}

export default FeedbackCard;