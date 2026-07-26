const ReadinessCard = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-slate-700">
      <div className="flex justify-between">
        <h2 className="text-slate-300 font-semibold">
          AI Readiness
        </h2>

        <span className="text-white font-bold">
          82%
        </span>
      </div>

      <div className="mt-5 w-full h-3 bg-slate-700 rounded-full">
        <div className="w-[82%] h-3 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ReadinessCard;