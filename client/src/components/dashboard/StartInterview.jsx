import { Play } from "lucide-react";

const StartInterview = () => {
  return (
    <button className="w-full mt-10 bg-white text-black py-4 rounded-2xl flex justify-center items-center gap-3 text-xl font-semibold hover:bg-slate-200 transition">
      <Play size={22} />

      Start Interview
    </button>
  );
};

export default StartInterview;