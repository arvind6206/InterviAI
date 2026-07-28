import { Download, RotateCcw, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-10">

      <button
        className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-2xl text-white font-semibold"
      >
        <Download size={20} />
        Download Report
      </button>

      <button
        onClick={() => navigate("/interview")}
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 transition px-7 py-4 rounded-2xl text-white font-semibold"
      >
        <RotateCcw size={20} />
        Start New Interview
      </button>

      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-3 bg-slate-700 hover:bg-slate-600 transition px-7 py-4 rounded-2xl text-white font-semibold"
      >
        <LayoutDashboard size={20} />
        Dashboard
      </button>

    </div>
  );
}

export default ActionButtons;