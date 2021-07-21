import React, { useState } from "react";

export default function Projects() {
  const [projectsIndex, setProjectsIndex] = useState(0);
  const [iFrameOpen, setIFrameOpen] = useState(false);

  const renderProjectPages = () => {
    return (
      <>
        {" "}
        <iframe
          className={
            iFrameOpen
              ? "absolute z-10 self-bottom w-full h-full rounded-xl self-center opacity-100"
              : "absolute z-0 self-bottom w-full h-full rounded-xl self-center opacity-50"
          }
          title={projects[projectsIndex].title}
          src={projects[projectsIndex].siteURL}
          loading='lazy'
        ></iframe>
        <button
          onClick={() => {
            setIFrameOpen(!iFrameOpen);
          }}
          className='absolute z-50 w-max h-max right-8 mt-4 text-base leading-3 rounded p-1 bg-white'
        >
          {iFrameOpen ? "Close" : "Show"} <br></br>Iframe
        </button>
        <div className='absolute z-0 font-Uchen flex leading-3 flex-col h-full w-4/5 self-center'>
          <h1 className='h-1/7 w-max m-4  text-2xl md:text-5xl font-bold bg-white self-left rounded px-2 bg-opacity-100'>
            {projects[projectsIndex].title}
          </h1>
          <h3 className='h-max z-0 w-full italic my-auto text-lg xs:text-xl xl:text-3xl bg-white  self-center rounded px-2 bg-opacity-100'>
            {projects[projectsIndex].technologies}
          </h3>
          <p className='h-auto z-0 text-base my-auto xs:text-xl xl:text-3xl text-left bg-white w-full self-center rounded px-2 bg-opacity-100'>
            {projects[projectsIndex].description}
          </p>
          <nav className='w-11/12 h-1/7 z-0 animate-flip mt-auto justify-center text-black flex text-2xl m-2 mx-auto font-ShadowsIntoLight font-extrabold bg-white bg-opacity-100 rounded-3xl'>
            <a
              className='mx-auto underline'
              href={projects[projectsIndex].gitHubURL}
            >
              GitHub Page
            </a>
            {"|"}
            <a
              className='mx-auto underline'
              href={projects[projectsIndex].siteURL}
            >
              Site Link
            </a>
          </nav>
        </div>
      </>
    );
  };

  const projects = [
    {
      title: "HoverGraph",
      description:
        "Inspired by a p5 spirograph. I modified the calculations, tied movement to mouse location, and added a change on click",
      gitHubURL: "https://github.com/Jblack017/HoverGraph",
      siteURL: "https://blackhamjoshua.tech/HoverGraph/",
      technologies: "JavaScript & p5, HTML, CSS",
    },
    {
      title: "4Cast",
      description:
        "This project uses python and flask to support the integration of FB Prophet, AlphaVantage for stock time series data, and MaterialUI for the frontend.",
      gitHubURL: "https://github.com/Jblack017/4cast",
      siteURL: "https://blackhamjoshua.tech/4cast/",
      technologies: "React, Javascript, Python, Ruby on Rails, MaterialUI",
    },
  ];

  return (
    <content className='flex w-screen h-11/12 justify-center'>
      <button
        className='z-10 filter w-6 mr-auto bg-opacity-95 bg-primary rounded-l-lg invert'
        value={projectsIndex}
        onClick={e =>
          setProjectsIndex(
            projectsIndex === 0 ? projects.length - 1 : --e.target.value
          )
        }
      >
        {"<"}
      </button>
      <button
        className='z-10 filter w-6 bg-opacity-95 bg-primary rounded-r-lg invert'
        value={projectsIndex}
        onClick={e =>
          setProjectsIndex(
            projectsIndex === projects.length - 1 ? 0 : ++e.target.value
          )
        }
      >
        {">"}
      </button>
      {renderProjectPages()}
    </content>
  );
}
