import { FileText } from "lucide-react";

function Summary({ resume, setResume }) {
  const maxCharacters = 500;

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-6">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
          <FileText className="text-white" size={22} />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Professional Summary
          </h2>

          <p className="text-slate-400 mt-1">
            Write a short introduction about yourself.
          </p>

        </div>

      </div>

      {/* Textarea */}

      <textarea
        rows={8}
        value={resume.summary || ""}
        maxLength={maxCharacters}
        onChange={(e) =>
          setResume({
            ...resume,
            summary: e.target.value,
          })
        }
        placeholder="Example:

MERN Stack Developer passionate about building scalable web applications. Experienced in React, Node.js, Express, MongoDB, REST APIs, JWT Authentication, and AI-powered applications."
        className="
          w-full
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-5
          text-white
          placeholder:text-slate-500
          outline-none
          resize-none
          focus:border-blue-500
          transition
          leading-8
        "
      />

      {/* Footer */}

      <div className="flex justify-between items-center mt-4">

        <p className="text-slate-400 text-sm">
          Keep it concise and ATS-friendly.
        </p>

        <span className="text-slate-400 text-sm">
          {(resume.summary || "").length}/{maxCharacters}
        </span>

      </div>

    </div>
  );
}

export default Summary;