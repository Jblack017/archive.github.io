import React, { useState } from "react";
import BodyContent from "./components/BodyContent";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Landing({ seconds }) {
  const [bodyContent, setBodyContent] = useState("home");

  return (
    <div className='flex flex-col min-h-screen max-w-screen p-2 bg-retro-digital bg-center bg-cover'>
      <Header setBodyContent={setBodyContent} />
      <BodyContent bodyContent={bodyContent} />
      <Footer />
    </div>
  );
}
