import { Mic, MicOff } from "lucide-react";

function Microphone({
  isListening,
  startListening,
  stopListening,
}) {
  return (
    <button
      onClick={isListening ? stopListening : startListening}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white transition
      ${
        isListening
          ? "bg-red-600 hover:bg-red-700"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      {isListening ? <MicOff size={20} /> : <Mic size={20} />}

      {isListening ? "Stop Recording" : "Start Recording"}
    </button>
  );
}

export default Microphone;