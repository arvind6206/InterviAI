import { useState } from "react";
import { Award, Plus, Trash2, Calendar } from "lucide-react";

function Certifications({ resume, setResume }) {
  const [certificate, setCertificate] = useState({
    title: "",
    organization: "",
    issueDate: "",
    credentialUrl: "",
  });

  function addCertificate() {
    if (!certificate.title || !certificate.organization) return;

    setResume({
      ...resume,
      certifications: [...(Array.isArray(resume.certifications) ? resume.certifications : []), certificate],
    });

    setCertificate({
      title: "",
      organization: "",
      issueDate: "",
      credentialUrl: "",
    });
  }

  function removeCertificate(index) {
    const updated = (Array.isArray(resume.certifications) ? resume.certifications : []).filter(
      (_, i) => i !== index
    );

    setResume({
      ...resume,
      certifications: updated,
    });
  }

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

          <Award className="text-white"/>

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Certifications
          </h2>

          <p className="text-slate-400">
            Showcase your certifications and achievements.
          </p>

        </div>

      </div>

      {/* Inputs */}

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Certificate Name"
          value={certificate.title}
          onChange={(e) =>
            setCertificate({
              ...certificate,
              title: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Organization"
          value={certificate.organization}
          onChange={(e) =>
            setCertificate({
              ...certificate,
              organization: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="date"
          value={certificate.issueDate}
          onChange={(e) =>
            setCertificate({
              ...certificate,
              issueDate: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Credential URL"
          value={certificate.credentialUrl}
          onChange={(e) =>
            setCertificate({
              ...certificate,
              credentialUrl: e.target.value,
            })
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
        />

      </div>

      <button
        onClick={addCertificate}
        className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white"
      >
        <Plus size={18}/>
        Add Certification
      </button>

      {/* List */}

      <div className="mt-8 space-y-5">

       {Array.isArray(resume.certifications) &&
  resume.certifications.length > 0 && (
    <section>
      <h2 className="font-bold text-lg border-b pb-2 mb-4">
        Certifications
      </h2>

      <div className="space-y-4">
        {resume.certifications.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-blue-600 text-sm">
              {item.organization}
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

export default Certifications;