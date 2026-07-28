import { CheckCircle2 } from "lucide-react";

function InterviewTimeline({ conversation = [] }) {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-8">
        Interview Timeline
      </h2>

      <div className="space-y-6">

        {conversation.map((item, index) => (

          <div
            key={index}
            className="border-l-4 border-blue-500 pl-6 relative"
          >

            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-500"></div>

            <h3 className="text-white font-semibold text-lg">

              Question {index + 1}

            </h3>

            <p className="text-slate-400 mt-2">

              {item.question}

            </p>

            <div className="mt-4 bg-slate-900 rounded-xl p-4">

              <p className="text-slate-300">

                {item.answer}

              </p>

            </div>

            <div className="flex items-center justify-between mt-4">

              <div className="flex items-center gap-2 text-green-400">

                <CheckCircle2 size={18} />

                {item.feedback}

              </div>

              <span className="text-blue-400 font-bold">

                {item.score}/10

              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InterviewTimeline;