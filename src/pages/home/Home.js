import React from "react";
import Typing from "react-typing-animation";

export default function Home() {
  const phrasesArray = [
    "Hello, My Name Is Joshua and I'll Be Your Host...",
    "I'm a Full Stack Software Engineer experienced in Telecom, Leadership, and Business Intelligence...",
    "Please take a moment to look around...",
    "I have some really cool projects I would love for you to see...",
    "But I only have two blogs, what should i write about...?",
    "Or maybe we should just build something...?",
  ];

  const animatedPhrases = () => {
    return phrasesArray.map(phrase => {
      return (
        <span key={phrase}>
          {phrase}
          <Typing.Reset count={1} delay={700} />
        </span>
      );
    });
  };

  return (
    <div className='flex justify-center m-auto px-2 w-3/4 h-full align-center text-3xl lg:text-5xl drop-shadow-2xl'>
      <Typing
        speed={80}
        className='bg-white border-2 mx-auto border-black p-4 rounded-md bg-opacity-50 mx-auto w-full h-full font-Landing'
      >
        {animatedPhrases()}
        Contact Me Below
        <Typing.Backspace delay={700} count={5} speed={350} />
        <strong className='absolute p-2 animate-pointDown '>⇓</strong>
      </Typing>
    </div>
  );
}
