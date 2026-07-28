import {
  Brain,
  MessageCircle,
  Laptop,
  Star,
} from "lucide-react";

function Card({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}%
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

          <div
            className="h-full bg-blue-500 transition-all duration-1000"
            style={{
              width: `${value}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

function PerformanceCards({ report }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Card
        title="Technical"
        value={report.technical}
        color="bg-blue-600"
        icon={<Laptop className="text-white" />}
      />

      <Card
        title="Communication"
        value={report.communication}
        color="bg-green-600"
        icon={<MessageCircle className="text-white" />}
      />

      <Card
        title="Problem Solving"
        value={report.problemSolving}
        color="bg-yellow-500"
        icon={<Brain className="text-white" />}
      />

      <Card
        title="Confidence"
        value={report.confidence}
        color="bg-purple-600"
        icon={<Star className="text-white" />}
      />

    </div>
  );
}

export default PerformanceCards;