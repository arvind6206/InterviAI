import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import ResumeStatus from "./ResumeStatus";
import ReadinessCard from "./ReadinessCard";
import ResumeSummary from "./ResumeSummary";
import Skills from "./Skills";
import Projects from "./Projects";
import StartInterview from "./StartInterview";
import axios from "axios";

function Dashboard() {
    const [resume, setResume] = useState(null)
    const [user, setUser] = useState(null);

    useEffect(() => {
        getResume()
        getProfile()
    })

    async function getResume(){
        try {
            const token = localStorage.getItem("token")

            const response = await axios.get(
                `{import.meta.env.VITE_BACKEND_URL}/api/v1/resume`,{
                    headers: {
                        token
                    }
                }
            )
            setResume(response.data.resume)
        } catch (error) {
            console.log(error)
        }
    }

    async function getProfile(){
        try {
            const token = localStorage.getItem("token")

            const response = await axios.get(
                `{import.meta.env.VITE_BACKEND_URL}/api/v1/user/profile`,{
                    headers: {
                        token
                    }
                }
            )
            setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
       <div className="flex min-h-screen bg-[#000E24]">
    <Sidebar />

    <div className="flex-1 p-8 overflow-y-auto">
      <Hero user={user}/>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <ResumeStatus />
        <ReadinessCard />
      </div>

      <ResumeSummary summary={resume?.summary} />

      <Skills skills={resume?.skills} />

      <Projects projects={resume?.projects} />

      <StartInterview />
    </div>
  </div>
    </>
  );
}

export default Dashboard;
