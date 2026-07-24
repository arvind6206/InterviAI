import { useEffect, useRef, useState } from "react";

const SCRIPT = [
  {
    speaker: "interviewer",
    text: "Tell me about a time you had to push back on a decision you disagreed with.",
  },
  {
    speaker: "you",
    text: "On a previous project, I noticed our timeline didn't account for QA, so I raised it during planning...",
  },
  {
    speaker: "interviewer",
    text: "Good. What did you do differently after that conversation?",
  },
];

function TranscriptLine({ speaker, text, typing }) {
  return (
    <div className="flex gap-3 mb-4 items-start">
      <div
        className={
          "font-mono text-[11px] font-medium min-w-[78px] pt-0.5 " +
          (speaker === "interviewer" ? "text-violet" : "text-amber")
        }
      >
        {speaker === "interviewer" ? "INTERVIEWER" : "YOU"}
      </div>
      <div className="text-sm leading-relaxed text-white">
        {text}
        {typing && (
          <span className="inline-block w-[7px] h-[14px] bg-amber ml-0.5 -mb-0.5 animate-pulse" />
        )}
      </div>
    </div>
  );
}

export default function Transcript() {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState("");
  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    let charTimer;
    let pauseTimer;

    function typeNextChar() {
      const item = SCRIPT[lineIndexRef.current];
      if (charIndexRef.current < item.text.length) {
        charIndexRef.current += 1;
        setCurrent(item.text.slice(0, charIndexRef.current));
        charTimer = setTimeout(typeNextChar, 18);
      } else {
        setLines((prev) => [...prev, item]);
        setCurrent("");
        charIndexRef.current = 0;
        lineIndexRef.current += 1;

        if (lineIndexRef.current >= SCRIPT.length) {
          pauseTimer = setTimeout(() => {
            setLines([]);
            lineIndexRef.current = 0;
            charTimer = setTimeout(typeNextChar, 400);
          }, 2200);
        } else {
          charTimer = setTimeout(typeNextChar, 500);
        }
      }
    }

    charTimer = setTimeout(typeNextChar, 400);
    return () => {
      clearTimeout(charTimer);
      clearTimeout(pauseTimer);
    };
  }, []);

  return (
    <div className="bg-ink border border-border rounded-xl px-6 py-6 max-w-[480px] min-h-[260px]">
      <div className="flex items-center gap-2 mb-[18px] pb-3.5 border-b border-border">
        <span className="w-[9px] h-[9px] rounded-full bg-[#4a3230]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#4a4230]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#2e4a34]" />
        <span className="font-mono text-[11px] text-muted ml-2">
          session — behavioral_round.log
        </span>
      </div>
      {lines.map((l, i) => (
        <TranscriptLine key={i} speaker={l.speaker} text={l.text} typing={false} />
      ))}
      {lineIndexRef.current < SCRIPT.length && (
        <TranscriptLine
          speaker={SCRIPT[lineIndexRef.current].speaker}
          text={current}
          typing
        />
      )}
    </div>
  );
}