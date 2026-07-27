import { useEffect, useRef, useState } from "react";
import VoiceAssistant from "../components/interview/VoiceAssistant";
import api from "../api/axios.js";
import { speak } from "../utils/speak.js";
import Transcript from "../components/interview/Transcript.jsx";
import Controls from "../components/interview/Controls.jsx";
import FeedbackCard from "../components/interview/FeedbackCard.jsx";
import toast from "react-hot-toast";
import Microphone from "../components/interview/MicroPhone.jsx";

function Interview() {
  const [status, setStatus] = useState("idle");
  const [question, setQuestion] = useState("");
  const [interviewId, setInterviewId] = useState("");
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setAnswer(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  function startListening() {
    if (!recognitionRef.current) return;

    recognitionRef.current.start();
  }

  function stopListening() {
    if (!recognitionRef.current) return;

    recognitionRef.current.stop();
  }

  useEffect(() => {
    if (!question) {
      return;
    }

    speak(question, {
      onStart: () => {
        setStatus("speaking");
      },

      onEnd: () => {
        setStatus("listening");
      },
    });
  }, [question]);

  useEffect(() => {
    startInterview();
  }, []);

  async function handleSubmit() {
    try {
      setSubmitting(true);

      const token = localStorage.getItem("token");

      const response = await api.post(
        "/interview/answer",
        {
          interviewId,
          answer,
        },
        {
          headers: {
            token,
          },
        },
      );

      setFeedback({
        score: response.data.score,
        feedback: response.data.feedback,
      });

      console.log(response.data);

      // Update question
      setQuestion(response.data.nextQuestion);

      // Clear textarea
      setAnswer("");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  async function startInterview() {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await api.post(
        "/interview/start",
        {},
        {
          headers: {
            token,
          },
        },
      );

      console.log("Interview Response: ", response.data);
      setInterviewId(response.data.interviewId);
      setQuestion(response.data.question);
      setStatus("speaking");
    } catch (error) {
      console.log(error);
      toast.error("Unable to start interview");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000E24] flex items-center justify-center text-white text-xl">
        Preparing your interview...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000E24] flex items-center justify-center p-10">
      <div className="w-full max-w-4xl">
        <VoiceAssistant status={status} question={question} />

        <Transcript
          answer={answer}
          setAnswer={setAnswer}
          disabled={status === "speaking"}
        />

        <Microphone
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
        />

        <Controls
          answer={answer}
          loading={submitting}
          onReplay={() => speak(question)}
          onRecord={() => console.log("Start recording")}
          onSubmit={handleSubmit}
        />

        <FeedbackCard feedback={feedback} />
      </div>
    </div>
  );
}

export default Interview;
