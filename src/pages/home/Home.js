import React, { useEffect, useState } from "react";
import landingTrack from "../home/sound/mixkit-70s-cop-chase-396.mp3";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      let landingAudio = document.getElementsByClassName("landingTrack")[0];
      landingAudio.play();
    }, 1000);
  }, []);

  return (
    <div className='flex text-3xl h-full w-full justify-center items-center backdrop-filter backdrop-hue-rotate-90 rounded-3xl'>
      <ReactAudioPlayer
        className='landingTrack'
        volume={0.4}
        src={landingTrack}
        preload
        autoPlay
        controls
      />
    </div>
  );
}
