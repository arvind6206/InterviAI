import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartInterview = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/interview')}
    className="w-full mt-10 bg-white text-black py-4 rounded-2xl flex justify-center items-center gap-3 text-xl font-semibold hover:bg-slate-200 transition">
      <Play size={22} />

      Start Interview
    </button>
  );
};

export default StartInterview;