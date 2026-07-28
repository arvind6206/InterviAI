import { useState } from "react";
import {
  Briefcase,
  Plus,
  Trash2,
} from "lucide-react";

function Experience({ resume, setResume }) {
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    location: "",
    duration: "",
    description: "",
  });

  function addExperience() {
    if (
      !experience.company ||
      !experience.role ||
      !experience.duration
    ) {
      return;
    }

    setResume({
      ...resume,
      experience: [
        ...(Array.isArray(resume.experience) ? resume.experience : []),
        experience,
      ],
    });

    setExperience({
      company: "",
      role: "",
      location: "",
      duration: "",
      description: "",
    });
  }

  function deleteExperience(index) {
    const updated = (Array.isArray(resume.experience) ? resume.experience : []).filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      experience: updated,
    });
  }

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

          <Briefcase className="text-white" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Work Experience
          </h2>

          <p className="text-slate-400">
            Add your internships and professional experience.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Company"
          value={experience.company}
          onChange={(e) =>
            setExperience({
              ...experience,
              company: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Role"
          value={experience.role}
          onChange={(e) =>
            setExperience({
              ...experience,
              role: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Location"
          value={experience.location}
          onChange={(e) =>
            setExperience({
              ...experience,
              location: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Duration (Jan 2025 - Present)"
          value={experience.duration}
          onChange={(e) =>
            setExperience({
              ...experience,
              duration: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

      </div>

      <textarea
        rows={5}
        placeholder="Describe your responsibilities and achievements..."
        value={experience.description}
        onChange={(e) =>
          setExperience({
            ...experience,
            description: e.target.value,
          })
        }
        className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none resize-none focus:border-blue-500"
      />

      <button
        onClick={addExperience}
        className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white"
      >
        <Plus size={18} />
        Add Experience
      </button>

      {/* Experience List */}

      {/* Experience List */}

<div className="mt-8 space-y-5">

  {Array.isArray(resume.experience) && resume.experience.length > 0 && (
  <section>
    <h2 className="font-bold text-lg border-b pb-2 mb-4">
      Experience
    </h2>

    <div className="space-y-5">
      {resume.experience.map((item, index) => (
        <div key={index}>
          <h3 className="font-semibold">{item.role}</h3>

          <p className="text-blue-600 text-sm">
            {item.company}
          </p>

          <p className="text-xs text-gray-500">
            {item.duration}
          </p>

          <p className="text-sm mt-2">
            {item.description}
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

export default Experience;