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

  const buttons = ["Home", "Projects", "Blogs", "Hobbies"];

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
          className='font-extrabold underline hover:text-primary focus:text-primary'
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
    <header onClick={setTitle} className='flex flex-col'>
      <h1 className='text-primary text-5xl overflow-visible tracking-tighter landscape:tracking-wider text-opacity-95 font-ShadowsIntoLight font-bold rounded-full border-4 border-secondary-light'>
        Joshua Blackham
      </h1>
      <div className='flex mt-2 justify-center font-bold'>
        <p className='text-primary px-2 font-ShadowsIntoLight text-3xl animate-wiggle-reverse landscape:text-secondary'>
          {"{"}
        </p>
        <p className='text-secondary text-2xl leading-relaxed font-IndieFlower landscape:text-primary'>
          {titles[titleIndex]}
        </p>
        <p className='text-primary px-2 font-ShadowsIntoLight text-3xl animate-wiggle landscape:text-secondary'>
          {"}"}
        </p>
      </div>
      <nav className='justify-center text-secondary-light w-max flex space-x-4 px-4 text-2xl mt-2 mx-auto xs:text-primary-dark font-ShadowsIntoLight font-extrabold backdrop-filter backdrop-saturate-200 backdrop-opacity-90 rounded-3xl'>
        {renderButtons()}
      </nav>
    </header>
  );
}
