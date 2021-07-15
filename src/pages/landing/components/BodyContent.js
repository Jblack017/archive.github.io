import React from "react";
// import Hobbies from "../../hobbies/Hobbies";

export default function BodyContent({ bodyContent }) {
  let page;

  switch (bodyContent) {
    default:
      page = "home";
      break;
    case "projects":
      page = "projects";
      break;
    case "blogs":
      page = "blogs";
      break;
    case "hobbies":
      page = "hobbies";
      // page = <Hobbies />;
      break;
  }

  return <div className='flex-1 w-auto h-2/3 my-2 '>{page}</div>;
}
