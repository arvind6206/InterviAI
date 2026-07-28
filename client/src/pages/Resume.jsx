import { useEffect, useState } from "react";
import api from "../api/axios";

import BasicInfo from "../components/resume/BasicInfo";
import Summary from "../components/resume/Summary";
import Skills from "../components/resume/Skills";
import Experience from "../components/resume/Experience";
import Projects from "../components/resume/Projects";
import Education from "../components/resume/Education";
import Certifications from "../components/resume/Certifications";
import Language from "../components/resume/Language";
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

    projects: [],

    education: [],

    certifications: [],

    languages: [],
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
          projects: Array.isArray(response.data.resume.projects) ? response.data.resume.projects : [],
          education: Array.isArray(response.data.resume.education) ? response.data.resume.education : [],
          certifications: Array.isArray(response.data.resume.certifications) ? response.data.resume.certifications : [],
          languages: Array.isArray(response.data.resume.languages) ? response.data.resume.languages : [],
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

  return (
    <div className="min-h-screen bg-[#000E24] p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-white">
            Resume Builder
          </h1>

          <p className="text-slate-400 mt-2">
            Edit your professional profile and keep it interview ready.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}

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

            <Projects
              resume={resume}
              setResume={setResume}
            />

            <Education
              resume={resume}
              setResume={setResume}
            />

            <Certifications
              resume={resume}
              setResume={setResume}
            />

            <Language
              resume={resume}
              setResume={setResume}
            />

          </div>

          {/* Right Side */}

          <div>

            <ResumePreview
              resume={resume}
            />

            <div className="mt-6">

              <SaveBar
                onSave={saveResume}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Resume;