import VoiceAssistant from "../components/interview/VoiceAssistant";
import QuestionCard from "../components/interview/QuestionCard";
import Transcript from "../components/interview/Transcript";
import Controls from "../components/interview/Controls";
import Timer from "../components/interview/Timer";

function Interview() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <VoiceAssistant />

      <Timer />

      <QuestionCard />

      <Transcript />

      <Controls />

    </div>
  );
}

export default Interview;