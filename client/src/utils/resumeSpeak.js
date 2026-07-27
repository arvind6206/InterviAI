export const resumeSpeaking = () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.resume();
  }
};