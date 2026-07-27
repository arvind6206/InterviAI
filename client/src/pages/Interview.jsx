import { useEffect, useState } from "react";
import VoiceAssistant from "../components/interview/VoiceAssistant";
import api from "../api/axios.js";
import { speak } from "../utils/speak.js";
// import QuestionCard from "../components/interview/QuestionCard";
// import Transcript from "../components/interview/Transcript";
// import Controls from "../components/interview/Controls";
// import Timer from "../components/interview/Timer";

function Interview() {
  const [status, setStatus] = useState("idle");
  const [question, setQuestion] = useState("")
  const [interviewId, setInterviewId] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!question){
      return
    }

    speak(question, {
      onStart: () => {
        setStatus("speaking")
      },

      onEnd: () => {
        setStatus("listening")
      }
    })
  }, [question])

  useEffect(() => {
    startInterview()
  }, [])

  async function startInterview(){
    try {
      setLoading(true)
      const token = localStorage.getItem("token");
      const response = await api.post(
        "/interview/start",
        {},
        {
          headers: {
            token,
          }
        }
      )

      console.log(response.data)
      setInterviewId(response.data.interviewId)
      setQuestion(response.data.question)
      setStatus("speaking")
    } catch (error) {
      console.log(error)
      toast.error("Unable to start interview")
    } finally {
      setLoading(false)
    }
  }

  if(loading){
    return (
      <div className='min-h-screen bg-[#000E24] flex items-center justify-center text-white text-xl'>
        Preparing your interview...
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#000E24] flex items-center jutify-center p-10">
      <div className='w-full max-w-4xl'>
        <VoiceAssistant
          status={status}
          question={question} 
        />
      </div>
    </div>
  );
}

export default Interview;
