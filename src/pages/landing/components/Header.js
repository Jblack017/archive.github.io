import React, { useState } from "react";

export default function Header({ setBodyContent }) {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Software Engineer",
    "Loving Husband",
    "If you Git it, you Git it!",
    "Undeniably Dad",
    "Jovial Josh",
    "Plays with Python",
    "Rides the Ruby Train",
    "Goal Setting / Go Getter",
    "JavaScript Junky",
    "CX Enthusiast",
    "Ad Tech Knowledgeable",
    "Site Built In Tailwind",
    "Go Love Yourself!",
  ];

  const buttons = ["Home", "Projects", "Blogs", "Hobbies", "Resume"];

  const setTitle = () => {
    if (titleIndex === titles.length - 1) {
      setTitleIndex(0);
    } else {
      let newIndex = titleIndex;
      ++newIndex;
      setTitleIndex(newIndex);
    }
  };

  const handleNavClick = e => {
    setBodyContent(e.target.value);
  };

  const renderButtons = () => {
    return buttons.map(button => {
      return (
        <button
          className='font-extrabold underline hover:text-white focus:text-primary z-10 filter '
          onClick={handleNavClick}
          value={button.toLowerCase()}
          key={button}
        >
          {button}
        </button>
      );
    });
  };

  return (
    <header
      onClick={setTitle}
      className='flex flex-col overflow-visible z-10 xs:w-2/3 self-center cursor-pointer '
    >
      <h1 className='text-primary  text-5xl lg:text-6xl w-max tracking-tighter landscape:tracking-wider text-opacity-95 font-ShadowsIntoLight font-bold rounded-full border-4 border-secondary-light self-center '>
        Joshua Blackham
      </h1>
      <div className='flex mt-2 justify-center font-bold '>
        <p className='text-primary px-2 font-ShadowsIntoLight text-3xl lg:text-5xl animate-wiggle-reverse '>
          {"{"}
        </p>
        <p className='text-secondary text-2xl lg:text-4xl leading-relaxed font-IndieFlower animate-jump '>
          {titles[titleIndex]}
        </p>
        <p className='text-primary px-2 font-ShadowsIntoLight text-3xl lg:text-5xl animate-wiggle '>
          {"}"}
        </p>
      </div>
      <nav className='justify-center z-10 text-black w-max flex space-x-4 md:space-x-8 px-4 lg:p-3 lg:text-3xl mt-2 m-auto font-ShadowsIntoLight font-extrabold backdrop-filter backdrop-saturate-200 rounded-3xl '>
        {renderButtons()}
      </nav>
    </header>
  );
}
