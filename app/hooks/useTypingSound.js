import { useRef } from "react";

export default function useTypingSound() {
  const audioRef = useRef(null);

  if (!audioRef.current && typeof Audio !== "undefined") {
    audioRef.current = new Audio("/public/typing.mp3");
    audioRef.current.volume = 0.4;
  }

  const play = () => {
    if (audioRef.current) {
      // Always restart to mimic keystrokes
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return { play };
}