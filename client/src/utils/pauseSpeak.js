export const pauseSpeaking = () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.pause();
  }
};