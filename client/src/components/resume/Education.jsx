import { useState } from "react";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

function Education({ resume, setResume }) {
  const [education, setEducation] = useState({
    college: "",
    degree: "",
    branch: "",
    cgpa: "",
    startYear: "",
    endYear: "",
  });

  function addEducation() {
    if (
      !education.college ||
      !education.degree ||
      !education.branch
    ) {
      return;
    }

    setResume({
      ...resume,
      education: [...(Array.isArray(resume.education) ? resume.education : []), education],
    });

    setEducation({
      college: "",
      degree: "",
      branch: "",
      cgpa: "",
      startYear: "",
      endYear: "",
    });
  }

  function deleteEducation(index) {
    const updated = (Array.isArray(resume.education) ? resume.education : []).filter((_, i) => i !== index);

    setResume({
      ...resume,
      education: updated,
    });
  }

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
          <GraduationCap className="text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Education
          </h2>

          <p className="text-slate-400">
            Add your educational qualifications.
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="College / University"
          value={education.college}
          onChange={(e) =>
            setEducation({
              ...education,
              college: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) =>
            setEducation({
              ...education,
              degree: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Branch / Specialization"
          value={education.branch}
          onChange={(e) =>
            setEducation({
              ...education,
              branch: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="CGPA / Percentage"
          value={education.cgpa}
          onChange={(e) =>
            setEducation({
              ...education,
              cgpa: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Start Year"
          value={education.startYear}
          onChange={(e) =>
            setEducation({
              ...education,
              startYear: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="End Year"
          value={education.endYear}
          onChange={(e) =>
            setEducation({
              ...education,
              endYear: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

      </div>

      <button
        onClick={addEducation}
        className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white"
      >
        <Plus size={18} />
        Add Education
      </button>

      {/* Education List */}

      <div className="mt-8 space-y-5">

{Array.isArray(resume.education) && resume.education.length > 0 && (
  <section>
    <h2 className="font-bold text-lg border-b pb-2 mb-4">
      Education
    </h2>

    <div className="space-y-5">
      {resume.education.map((edu, index) => (
        <div key={index}>
          <h3 className="font-semibold">
            {edu.degree}
          </h3>

          <p className="text-blue-600 text-sm">
            {edu.college}
          </p>

          <p className="text-sm">
            {edu.branch}
          </p>

          <p className="text-xs text-gray-500">
            {edu.startYear} - {edu.endYear}
          </p>
        </div>
      ))}
    </div>
  </section>
)}

      </div>

    </div>
  );
}

export default Education;