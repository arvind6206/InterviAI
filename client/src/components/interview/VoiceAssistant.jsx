import { Bot, Volume2 } from "lucide-react";

function VoiceAssistant({
  status = "idle",
  question = "Welcome to InterviAI. Click Start Interview to begin.",
}) {
  return (
    <div className="w-full bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-lg">
      {/*avatar*/}
      <div className="flex flex-col items-center">
        <div
          className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 
                flex items-center justify-center shadow-lg"
        >
          <Bot className="text-white" size={45} />
        </div>

        <h2 className="text-2xl font-bold text-white mt-5">InterviAI</h2>
      </div>

      {/*Animation*/}

      <div className="flex justify-center gap-2 mt-8">
        <span className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></span>
        <span className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-100"></span>
        <span className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-100"></span>
      </div>

      <p className="text-center text-blue-400 font-medium mt-4 capitalize">
        {status}
      </p>

      {/*ques*/}

      <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-6">
        <p
          className={`text-center font-semibold mt-5
  ${
    status === "speaking"
      ? "text-blue-400"
      : status === "listening"
        ? "text-green-400"
        : status === "thinking"
          ? "text-yellow-400"
          : "text-gray-400"
  }`}
        >
          {status.toUpperCase()}
        </p>
      </div>

      {/*replay*/}

      <div className="flex justify-center mt-6">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                transition px-6 py-3 rounded-xl text-white"
        >
          <Volume2 size={20} />
          Replay Question
        </button>
      </div>
    </div>
  );
}

export default VoiceAssistant;
