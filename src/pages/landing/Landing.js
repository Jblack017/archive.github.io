import React, { useState } from "react";
// import AdSense from "../adsense/AdSense";
import BodyContent from "./components/BodyContent";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Landing() {
  const [bodyContent, setBodyContent] = useState("home");

  return (
    <div className='flex flex-col min-h-screen max-w-screen p-2 bg-retro-digital bg-center bg-cover'>
      <div className='absolute z-50'>{/* <AdSense /> */}</div>
      <Header setBodyContent={setBodyContent} />
      <BodyContent bodyContent={bodyContent} />
      <Footer />
      <div className='absolute z-50'>{/* <AdSense /> */}</div>
    </div>
  );
}
