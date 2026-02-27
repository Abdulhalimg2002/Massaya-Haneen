"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useVideoAudio } from "../ui/VideoAudioContext";


interface VideoCardProps {
  src: string;
  id: string; // 🔥 مهم
  className?: string;
}

export default function VideoCard({ src, id, className }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { activeId, setActiveId } = useVideoAudio();
  const [isMuted, setIsMuted] = useState(true);

  // 🔥 إذا تغير activeId
  useEffect(() => {
    if (!videoRef.current) return;

    if (activeId !== id) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  }, [activeId, id]);

  const toggleMute = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setActiveId(id); // 🔥 سجل حاله كالفيديو النشط
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
      setActiveId(null);
    }
  };

  return (
   <div className="relative w-full h-full">
  <video
    ref={videoRef}
    src={src}
    autoPlay
    loop
    playsInline
    muted
    className={` object-cover rounded-2xl ${className}`}
  />

  {/* Overlay ما يمنع النقر */}
  <div className="absolute inset-0 bg-black/25 rounded-2xl pointer-events-none"></div>

  <button
    onClick={toggleMute}
    className="absolute bottom-3 right-3 
               bg-black/60 hover:bg-white 
               text-white hover:text-black 
               p-2 rounded-full 
               transition-all duration-300 
               backdrop-blur-md shadow-lg"
  >
    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
  </button>
</div>
  );
}