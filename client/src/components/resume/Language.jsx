import { useState } from "react";
import { Languages, Plus, Trash2 } from "lucide-react";

function LanguageCard({ language, level, onDelete }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex justify-between items-center">

      <div>

        <h3 className="text-white text-lg font-semibold">
          {language}
        </h3>

        <p className="text-blue-400 mt-1">
          {level}
        </p>

      </div>

      <button
        onClick={onDelete}
        className="text-red-400 hover:text-red-500 transition"
      >
        <Trash2 size={20} />
      </button>

    </div>
  );
}

function LanguagesComponent({ resume, setResume }) {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("Intermediate");

  function addLanguage() {
    if (!language.trim()) return;

    setResume({
      ...resume,
      languages: [
        ...(Array.isArray(resume.languages) ? resume.languages : []),
        {
          language,
          level,
        },
      ],
    });

    setLanguage("");
    setLevel("Intermediate");
  }

  function removeLanguage(index) {
    const updated = (Array.isArray(resume.languages) ? resume.languages : []).filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      languages: updated,
    });
  }

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

          <Languages className="text-white" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Languages
          </h2>

          <p className="text-slate-400">
            Languages you can communicate in.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="grid md:grid-cols-3 gap-5">

        <input
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Language"
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Professional</option>
          <option>Native</option>
        </select>

        <button
          onClick={addLanguage}
          className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          Add Language
        </button>

      </div>

      {/* Languages */}

      <div className="space-y-5 mt-8">

     {Array.isArray(resume.languages) && resume.languages.length > 0 && (
  <section>
    <h2 className="font-bold text-lg border-b pb-2 mb-4">
      Languages
    </h2>

    <div className="flex flex-wrap gap-2">
      {resume.languages.map((item, index) => (
        <span
          key={index}
          className="bg-slate-200 rounded-full px-3 py-1 text-sm"
        >
          {item.language} • {item.level}
        </span>
      ))}
    </div>
  </section>
)}

      </div>

    </div>
  );
}

export default LanguagesComponent;