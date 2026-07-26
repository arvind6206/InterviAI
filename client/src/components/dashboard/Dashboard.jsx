import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import ResumeStatus from "./ResumeStatus";
import ReadinessCard from "./ReadinessCard";
import ResumeSummary from "./ResumeSummary";
import Skills from "./Skills";
import Projects from "./Projects";
import StartInterview from "./StartInterview";
import api from "../../api/axios.js";
import UploadResume from "./UploadResume";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Certifications from "./Certifications.jsx";

function Dashboard() {
  const [resume, setResume] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getResume();
    getProfile();
  }, []);

  async function getResume() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/resume", {
        headers: {
          token,
        },
      });
      setResume(response.data.resume);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProfile() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/user/profile", {
        headers: {
          token,
        },
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex min-h-screen bg-[#000E24]">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-10">
          <Hero user={user} resume={resume} />

          {!resume ? (
            <UploadResume refreshResume={getResume} />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <ResumeStatus resume={resume} />
                <ReadinessCard resume={resume} />
              </div>

              <ResumeSummary summary={resume?.summary} />

              <Skills skills={resume?.skills} />

              <Projects projects={resume?.projects} />

              <Experience experience={resume?.experience} />

              <Education education={resume?.education} />

              <Certifications certifications={resume?.certifications} />

              <StartInterview />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default Dashboard;
