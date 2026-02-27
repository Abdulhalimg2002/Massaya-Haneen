"use client";

import type { VideoAudioContextType } from "@/interface";
import { createContext, useContext, useState } from "react";



const VideoAudioContext = createContext<VideoAudioContextType | null>(null);

export function VideoAudioProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <VideoAudioContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </VideoAudioContext.Provider>
  );
}

export function useVideoAudio() {
  const context = useContext(VideoAudioContext);
  if (!context) {
    throw new Error("useVideoAudio must be used inside VideoAudioProvider");
  }
  return context;
}