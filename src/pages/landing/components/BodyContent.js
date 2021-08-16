import React from "react";
import Hobbies from "../../hobbies/Hobbies";
import Home from "../../home/Home";
import Projects from "../../projects/Projects";
import Blogs from "../../blogs/Blogs";
import Resume from "../../resume/Resume";
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
    case "resume":
      page = <Resume />;
      break;
  }

  return (
    <div className='flex flex-grow w-screen xs:w-2/3 self-center m-1 my-4 text-3xl backdrop-filter backdrop-hue-rotate-90 rounded-3xl'>
      {page}
    </div>
  );
}
