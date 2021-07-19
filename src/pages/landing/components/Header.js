import React, { useState } from "react";

export default function Header({ setBodyContent }) {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Full Stack Software Engineer",
    "Loving Husband",
    "If you Git it, you Git it!",
    "Stores jokes in Dada-Base",
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
          className='font-extrabold underline tracking-widest hover:text-primary focus:text-primary'
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
        <p className='text-primary px-2 font-ShadowsIntoLight text-3xl animate-wiggle-reverse'>
        {"{"}
        </p>
        <p className='text-secondary text-2xl leading-relaxed font-IndieFlower'>
          {titles[titleIndex]}
        </p>
        <p className='text-primary px-2 font-ShadowsIntoLight text-3xl animate-wiggle'>
        {"}"}
        </p>
      </div>
      <nav className='text-secondary w-max flex space-x-4 px-4  text-2xl mt-2 mx-auto xs:text-primary-dark font-ShadowsIntoLight font-extrabold backdrop-filter backdrop-saturate-150 backdrop-opacity-70 rounded-3xl'>
        {renderButtons()}
      </nav>
    </header>
  );
}
