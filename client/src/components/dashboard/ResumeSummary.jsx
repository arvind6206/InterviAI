const ResumeSummary = ({ summary }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl text-white font-semibold mb-4">
        Resume Summary
      </h2>

      <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-slate-700">
        <p className="text-slate-300 leading-8">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default ResumeSummary;