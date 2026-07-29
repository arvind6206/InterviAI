import {
  Mail,
  Phone,
  MapPin,
  Link,
  Globe,
} from "lucide-react";

function ResumePreview({ resume }) {
  return (
    <div className="sticky top-8">
      <div className="bg-white text-black rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl font-bold">
              {resume.name
                ? resume.name.charAt(0).toUpperCase()
                : "U"}
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {resume.name || "Your Name"}
              </h1>
              <p className="mt-2 opacity-90">
                MERN Stack Developer
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="font-bold text-lg border-b pb-2 mb-4">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              {resume.email && (
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  {resume.email}
                </div>
              )}
              {resume.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  {resume.phone}
                </div>
              )}
              {resume.location && (
                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  {resume.location}
                </div>
              )}
              {resume.linkedin && (
                <div className="flex items-center gap-3">
                  <Link size={16} />
                  {resume.linkedin}
                </div>
              )}
              {resume.github && (
                <div className="flex items-center gap-3">
                  <Globe size={16} />
                  {resume.github}
                </div>
              )}
              {resume.portfolio && (
                <div className="flex items-center gap-3">
                  <Globe size={16} />
                  {resume.portfolio}
                </div>
              )}
            </div>
          </section>

          {/* Summary */}
          {resume.summary && (
            <section>
              <h2 className="font-bold text-lg border-b pb-2 mb-3">
                Professional Summary
              </h2>
              <p className="text-sm leading-7">
                {resume.summary}
              </p>
            </section>
          )}

          {/* Skills */}
          {Array.isArray(resume.skills) && resume.skills.length > 0 && (
            <section>
              <h2 className="font-bold text-lg border-b pb-2 mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-200 rounded-full px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {Array.isArray(resume.experience) && resume.experience.length > 0 && (
            <section>
              <h2 className="font-bold text-lg border-b pb-2 mb-4">
                Experience
              </h2>
              <div className="space-y-5">
                {resume.experience.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">
                      {item.role}
                    </h3>
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

          {/* Education */}
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
    </div>
  );
}

export default ResumePreview;
