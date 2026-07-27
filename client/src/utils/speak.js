export const speak = (
    text,
    {
        rate = 1,
        pitch = 1,
        volume = 1,
        voice = null,
        onStart = () => {},
        onEnd = () => {},
        onError = () => {},

    } = {}
) => {
    if(!("speechSynthesis" in window)){
        console.error("Speech Synthesis is not supported in this browser.")
        return;
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)

    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume

    if(voice){
        utterance.voice = voice;
    }

    utterance.onstart = onStart;
    utterance.onend = onEnd;
    utterance.onerror = onError;

    window.speechSynthesis.speak(utterance)
}