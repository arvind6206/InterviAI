import { CheckCircle2 } from "lucide-react";

const ResumeStatus = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-slate-700">
      <div className="flex items-center gap-2 text-green-500 mb-4">
        <CheckCircle2 size={20} />
        <span className="font-medium text-slate-300">
          Resume status
        </span>
      </div>

      <h2 className="text-3xl font-bold text-white">
        Uploaded
      </h2>

      <p className="text-slate-400 mt-2">
        Updated today
      </p>
    </div>
  );
};

export default ResumeStatus;