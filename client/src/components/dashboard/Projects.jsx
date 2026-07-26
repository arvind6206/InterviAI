import { FolderGit2 } from "lucide-react";

const Projects = ({ projects=[] }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl text-white font-semibold mb-4">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project}
            className="bg-[#1A1A1A] border border-slate-700 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500 transition"
          >
            <FolderGit2 className="text-blue-400" />

            <h3 className="text-white font-semibold">
              {project}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;