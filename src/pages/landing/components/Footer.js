import React from "react";
import emailImage from "../images/envelope.png";
import githubImage from "../images/octopus.png";
import linkdinImage from "../images/andromeda-chain.png";

export default function Footer({ seconds }) {
  console.log(seconds % 3);

  return (
    <footer className='flex align-center justify-center space-x-4 p-2 w-full h-1/12 bg-white opacity-70 rounded-3xl'>
      <strong className='animate-point text-lg'>Contact Me=></strong>
      <a href='mailto: blackhamjoshua@comcast.net'>
        {seconds % 3 !== 0 ? (
          <img
            className='h-6 w-6 mx-auto'
            src={emailImage}
            alt='envelope'
          ></img>
        ) : (
          "Email"
        )}
      </a>
      <a href='https://github.com/Jblack017'>
        {seconds % 3 !== 1 ? (
          <img
            className='h-6 w-6 mx-auto'
            src={githubImage}
            alt='octopus'
          ></img>
        ) : (
          "GitHub"
        )}
      </a>
      <a href='https://www.linkedin.com/in/blackham~joshua/'>
        {seconds % 3 !== 2 ? (
          <img
            className='h-6 w-6 mx-auto'
            src={linkdinImage}
            alt='andromeda chain'
          ></img>
        ) : (
          "LinkedIn"
        )}
      </a>
    </footer>
  );
}
