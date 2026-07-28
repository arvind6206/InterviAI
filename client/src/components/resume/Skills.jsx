import { useState } from "react";
import { Plus, X, Cpu } from "lucide-react";

function Skills({ resume, setResume }) {
  const [skill, setSkill] = useState("");

  function addSkill() {
    const value = skill.trim();

    if (!value) return;

    if (resume.skills.includes(value)) {
      setSkill("");
      return;
    }

    setResume({
      ...resume,
      skills: [...resume.skills, value],
    });

    setSkill("");
  }

  function removeSkill(index) {
    const updatedSkills = resume.skills.filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      skills: updatedSkills,
    });
  }

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Heading */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

          <Cpu className="text-white" size={22} />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Skills
          </h2>

          <p className="text-slate-400 mt-1">
            Add all your technical skills.
          </p>

        </div>

      </div>

      {/* Input */}

      <div className="flex gap-4">

        <input
          type="text"
          value={skill}
          placeholder="React"
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
          className="
            flex-1
            bg-slate-900
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-white
            outline-none
            focus:border-blue-500
          "
        />

        <button
          onClick={addSkill}
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            px-6
            rounded-xl
            text-white
            flex
            items-center
            gap-2
          "
        >
          <Plus size={20} />
          Add
        </button>

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-4 mt-8">

        {resume.skills.map((item, index) => (

          <div
            key={index}
            className="
              bg-blue-600
              text-white
              rounded-full
              px-5
              py-2
              flex
              items-center
              gap-3
            "
          >

            {item}

            <button
              onClick={() => removeSkill(index)}
            >

              <X size={16} />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Skills;