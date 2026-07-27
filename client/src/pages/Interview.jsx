import VoiceAssistant from "../components/interview/VoiceAssistant";
// import QuestionCard from "../components/interview/QuestionCard";
// import Transcript from "../components/interview/Transcript";
// import Controls from "../components/interview/Controls";
// import Timer from "../components/interview/Timer";

function Interview() {
  return (
    <div className="min-h-screen bg-[#000E24] flex items-center jutify-center p-10">
      <div>
        <VoiceAssistant />
      </div>
    </div>
  );
}

export default Interview;
