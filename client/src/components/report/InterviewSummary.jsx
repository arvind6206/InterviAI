import {
  User,
  Briefcase,
  Calendar,
  Clock,
  FileText,
  Brain,
  HelpCircle,
} from "lucide-react";

function SummaryItem({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-700 last:border-none">

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center">
          {icon}
        </div>

        <span className="text-slate-300">
          {label}
        </span>

      </div>

      <span className="font-semibold text-white text-right">
        {value}
      </span>

    </div>
  );
}

function InterviewSummary({ report }) {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-lg">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

          <FileText className="text-white" size={22} />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Interview Summary
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Overview of your interview session
          </p>

        </div>

      </div>

      <SummaryItem
        icon={<User className="text-blue-400" size={20} />}
        label="Candidate"
        value={report.candidate}
      />

      <SummaryItem
        icon={<Briefcase className="text-green-400" size={20} />}
        label="Role"
        value={report.role}
      />

      <SummaryItem
        icon={<Calendar className="text-yellow-400" size={20} />}
        label="Interview Date"
        value={report.interviewDate}
      />

      <SummaryItem
        icon={<Clock className="text-purple-400" size={20} />}
        label="Duration"
        value={report.duration}
      />

      <SummaryItem
        icon={<HelpCircle className="text-pink-400" size={20} />}
        label="Questions"
        value={report.totalQuestions}
      />

      <SummaryItem
        icon={<Brain className="text-cyan-400" size={20} />}
        label="AI Model"
        value="Gemini 3.5 Flash"
      />

      <SummaryItem
        icon={<FileText className="text-orange-400" size={20} />}
        label="Resume"
        value="Uploaded Successfully"
      />

    </div>
  );
}

export default InterviewSummary;