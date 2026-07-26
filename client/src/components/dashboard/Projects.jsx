import { FolderGit2 } from "lucide-react";

function Projects({ projects = [] }) {

  if (projects.length === 0) return null;

  return (
    <div className="mt-8">

      <h2 className="text-xl font-semibold text-white mb-4">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-[#0F172A] border border-slate-700 rounded-xl p-5 hover:border-blue-500 transition"
          >
            <h3 className="text-white font-semibold">
              {project}
            </h3>
          </div>

        ))}

      </div>

    </div>
  );
}

export default Projects;