import { useState } from "react";
import {
  Folder,
  Plus,
  Trash2,
  Link,
  Globe,
} from "lucide-react";

function Projects({ resume, setResume }) {
  const [project, setProject] = useState({
    title: "",
    techStack: "",
    github: "",
    live: "",
    description: "",
  });

  function addProject() {
    if (
      !project.title ||
      !project.techStack ||
      !project.description
    ) {
      return;
    }

    setResume({
      ...resume,
      projects: [...(Array.isArray(resume.projects) ? resume.projects : []), project],
    });

    setProject({
      title: "",
      techStack: "",
      github: "",
      live: "",
      description: "",
    });
  }

  function deleteProject(index) {
    const updatedProjects = (Array.isArray(resume.projects) ? resume.projects : []).filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      projects: updatedProjects,
    });
  }

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
          <Folder className="text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Projects
          </h2>

          <p className="text-slate-400">
            Showcase your best projects.
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Project Name"
          value={project.title}
          onChange={(e) =>
            setProject({
              ...project,
              title: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Tech Stack"
          value={project.techStack}
          onChange={(e) =>
            setProject({
              ...project,
              techStack: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="GitHub URL"
          value={project.github}
          onChange={(e) =>
            setProject({
              ...project,
              github: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Live Demo URL"
          value={project.live}
          onChange={(e) =>
            setProject({
              ...project,
              live: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

      </div>

      <textarea
        rows={5}
        placeholder="Describe the project..."
        value={project.description}
        onChange={(e) =>
          setProject({
            ...project,
            description: e.target.value,
          })
        }
        className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl p-4 text-white resize-none outline-none focus:border-blue-500"
      />

      <button
        onClick={addProject}
        className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white"
      >
        <Plus size={18} />
        Add Project
      </button>

      {/* Projects */}

      <div className="mt-8 space-y-6">

        {Array.isArray(resume.projects) && resume.projects.length > 0 && (
  <section>
    <h2 className="font-bold text-lg border-b pb-2 mb-4">
      Projects
    </h2>

    <div className="space-y-5">
      {resume.projects.map((project, index) => (
        <div key={index}>
          <h3 className="font-semibold">
            {project.title}
          </h3>

          <p className="text-blue-600 text-sm">
            {project.techStack}
          </p>

          <p className="text-sm mt-2">
            {project.description}
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

export default Projects;