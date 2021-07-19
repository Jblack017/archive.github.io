import React from "react";
import emailImage from "../images/envelope.png";
import githubImage from "../images/octopus.png";
import linkdinImage from "../images/andromeda-chain.png";

export default function Footer({ seconds }) {

  return (
    <footer className='flex h-12 w-full space-x-4 py-2 bg-white opacity-70 rounded-3xl'>
    <strong className='flex-grow-0 ml-4 animate-point text-lg self-center'>Contact Me -></strong>
    <div className="flex flex-grow mx-auto justify-center">
      <a className="w-1/3" href='mailto: blackhamjoshua@comcast.net'>
        {seconds % 3 !== 0 ? (
          <img
            className='mx-auto h-8 w-1/8'
            src={emailImage}
            alt='envelope'
          ></img>
        ) : (
          <p className='h-8 w-1/8'>Email</p>
        )}
      </a>
      <a className="w-1/3" href='https://github.com/Jblack017'>
        {seconds % 3 !== 1 ? (
          <img
            className='mx-auto h-8 w-1/8'
            src={githubImage}
            alt='octopus'
          ></img>
        ) : (
          <p className='h-8 w-1/8'>GitHub</p>
        )}
      </a>
      <a className="w-1/3" href='https://www.linkedin.com/in/blackham~joshua/'>
        {seconds % 3 !== 2 ? (
          <img
            className='mx-auto h-8 w-1/8'
            src={linkdinImage}
            alt='andromeda chain'
          ></img>
        ) : (
          <p className='h-8 w-1/8'>LinkedIn</p>
        )}
      </a>
      </div>
    </footer>
  );
}
