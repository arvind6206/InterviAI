const Skills = ({ skills = [] }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-900/50 text-blue-300 px-5 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;