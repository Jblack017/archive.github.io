import React, { useState } from "react";
import BodyContent from "./components/BodyContent";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Landing({ seconds }) {
  const [bodyContent, setBodyContent] = useState("home");

  return (
    <div className='flex-col items-center h-screen bg-retro-digital bg-center bg-cover pt-1 px-2'>
      <Header setBodyContent={setBodyContent} />
      <BodyContent bodyContent={bodyContent} />
      <Footer seconds={seconds} />
    </div>
  );
}
