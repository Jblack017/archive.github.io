import React from "react";
import Hobbies from "../../hobbies/Hobbies";
import Home from "../../home/Home";
import Projects from "../../projects/Projects";
import Blogs from "../../blogs/Blogs";
// import Hobbies from "../../hobbies/Hobbies";

export default function BodyContent({ bodyContent }) {
  let page;

  switch (bodyContent) {
    default:
      page = <Home />;
      break;
    case "projects":
      page = <Projects />;
      break;
    case "blogs":
      page = <Blogs />;
      break;
    case "hobbies":
      page = <Hobbies />;
      break;
  }

  return <div className='flex-grow my-2 text-3xl h-full w-full justify-center items-center backdrop-filter backdrop-hue-rotate-90 rounded-3xl'>{page}</div>;
}
