function Transcript({
  answer,
  setAnswer,
  disabled = false,
}) {
  return (
    <div className="mt-8 w-full bg-[#111827] border border-slate-700 rounded-3xl p-6 shadow-lg">

      {/* Heading */}

      <div className="flex items-center justify-between mb-4">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Your Answer
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            You can type your answer or use the microphone.
          </p>
        </div>

        <div className="text-sm text-slate-400">
          {answer.length} Characters
        </div>

      </div>

      {/* Textarea */}

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={disabled}
        rows={8}
        placeholder={
          disabled
            ? "Please wait while InterviAI is speaking..."
            : "Start typing your answer..."
        }
        className="
          w-full
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-5
          text-white
          placeholder:text-slate-500
          resize-none
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
      />

    </div>
  );
}

export default Transcript;