import { Bot, Volume2 } from "lucide-react";
import { speak } from "../../utils/speak";

function VoiceAssistant({
  status = "idle",
  question = "Welcome to InterviAI. Click Start Interview to begin.",
  questionNumber = 1,
  totalQuestions = 10,
}) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-lg">

      {/* Progress Bar */}

      <div className="mb-8">

        <div className="flex justify-between items-center mb-2">

          <h3 className="text-white font-semibold">
            Question {questionNumber} / {totalQuestions}
          </h3>

          <span className="text-blue-400 font-medium">
            {Math.round(progress)}%
          </span>

        </div>

        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">

          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Avatar */}

      <div className="flex flex-col items-center">

        <div
          className="
            w-24 h-24
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <Bot className="text-white" size={46} />
        </div>

        <h2 className="text-2xl font-bold text-white mt-5">
          InterviAI
        </h2>

      </div>

      {/* Speaking Animation */}

      <div className="flex justify-center gap-2 mt-8">

        <span className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></span>

        <span className="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:150ms]"></span>

        <span className="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]"></span>

      </div>

      {/* Status */}

      <div className="mt-5 text-center">

        {status === "speaking" && (
          <p className="text-blue-400 font-semibold text-lg">
            🎙️ InterviAI is speaking...
          </p>
        )}

        {status === "listening" && (
          <p className="text-green-400 font-semibold text-lg">
            🎤 Listening...
          </p>
        )}

        {status === "thinking" && (
          <p className="text-yellow-400 font-semibold text-lg">
            🧠 Evaluating your answer...
          </p>
        )}

        {status === "idle" && (
          <p className="text-slate-400 font-semibold text-lg">
            Ready
          </p>
        )}

      </div>

      {/* Question */}

      <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-6">

        <p className="text-white text-lg leading-8 text-center">
          {question}
        </p>

      </div>

      {/* Replay */}

      <div className="flex justify-center mt-8">

        <button
          onClick={() => speak(question)}
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            px-6
            py-3
            rounded-xl
            text-white
            transition
          "
        >
          <Volume2 size={20} />

          Replay Question
        </button>

      </div>

    </div>
  );
}

export default VoiceAssistant;