import { Send, Mic, Volume2 } from "lucide-react";

function Controls({
  answer,
  onReplay,
  onRecord,
  onSubmit,
  loading,
}) {
  return (
    <div className="flex items-center justify-end gap-4 mt-6">

      <button
        onClick={onReplay}
        className="flex items-center gap-2 px-5 py-3 rounded-xl
        bg-slate-700 hover:bg-slate-600 text-white transition"
      >
        <Volume2 size={18} />
        Replay
      </button>

      <button
        onClick={onRecord}
        className="flex items-center gap-2 px-5 py-3 rounded-xl
        bg-green-600 hover:bg-green-700 text-white transition"
      >
        <Mic size={18} />
        Record
      </button>

      <button
        disabled={answer.trim() === "" || loading}
        onClick={onSubmit}
        className="flex items-center gap-2 px-6 py-3 rounded-xl
        bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600
        disabled:cursor-not-allowed text-white transition"
      >
        <Send size={18} />
        {loading ? "Submitting..." : "Submit Answer"}
      </button>

    </div>
  );
}

export default Controls;