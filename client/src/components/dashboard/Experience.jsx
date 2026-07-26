function Experience({ experience }) {
  if (!experience || experience.trim() === "") {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Experience
      </h2>

      <div className="bg-[#0F172A] border border-slate-700 rounded-2xl p-6">
        <p className="text-slate-300 leading-7">
          {experience}
        </p>
      </div>
    </div>
  );
}

export default Experience;