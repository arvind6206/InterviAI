import { useEffect, useState } from "react";
import api from "../api/axios";

import BasicInfo from "../components/resume/BasicInfo";
import Summary from "../components/resume/Summary";
import Skills from "../components/resume/Skills";
import Experience from "../components/resume/Experience";
import Education from "../components/resume/Education";
import ResumePreview from "../components/resume/ResumePreview";
import SaveBar from "../components/resume/SaveBar";

function Resume() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    skills: [],
    experience: [],
    education: [],
  });

  useEffect(() => {
    getResume();
  }, []);

  async function getResume() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/resume", {
        headers: {
          token,
        },
      });

      if (response.data.resume) {
        setResume({
          ...response.data.resume,
          skills: Array.isArray(response.data.resume.skills) ? response.data.resume.skills : [],
          experience: Array.isArray(response.data.resume.experience) ? response.data.resume.experience : [],
          education: Array.isArray(response.data.resume.education) ? response.data.resume.education : [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function saveResume() {
    try {
      const token = localStorage.getItem("token");

      await api.put("/resume", resume, {
        headers: {
          token,
        },
      });

      alert("Resume Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function downloadPDF() {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    // Simple print to PDF functionality
    window.print();
  }

  return (
    <div className="min-h-screen bg-[#000E24] p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Resume Builder
          </h1>
          <p className="text-slate-400 mt-2">
            Edit your professional profile and download as PDF.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Edit Form */}
          <div className="lg:col-span-2 space-y-8">
            <BasicInfo
              resume={resume}
              setResume={setResume}
            />

            <Summary
              resume={resume}
              setResume={setResume}
            />

            <Skills
              resume={resume}
              setResume={setResume}
            />

            <Experience
              resume={resume}
              setResume={setResume}
            />

            <Education
              resume={resume}
              setResume={setResume}
            />
          </div>

          {/* Right Side - Preview & Actions */}
          <div>
            <div id="resume-preview">
              <ResumePreview
                resume={resume}
              />
            </div>

            <div className="mt-6 space-y-4">
              <SaveBar
                onSave={saveResume}
              />

              <button
                onClick={downloadPDF}
                className="w-full bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
