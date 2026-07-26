function Certifications({ certifications = [] }) {

  if (certifications.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">

      <h2 className="text-xl font-semibold text-white mb-4">
        Certifications
      </h2>

      <div className="flex flex-wrap gap-3">

        {certifications.map((certificate, index) => (
          <span
            key={index}
            className="bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full"
          >
            {certificate}
          </span>
        ))}

      </div>

    </div>
  );
}

export default Certifications;