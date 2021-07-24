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
              ? "absolute z-10 self-bottom w-full h-full rounded-lg self-center opacity-100"
              : "absolute z-0 self-bottom w-full h-full rounded-lg self-center opacity-50"
          }
          title={projects[projectsIndex].title}
          src={projects[projectsIndex].siteURL}
          loading='lazy'
          key={key => key + 1}
        ></iframe>
        <button
          onClick={() => {
            setIFrameOpen(!iFrameOpen);
          }}
          className='absolute z-50 border-2 drop-shadow-sm border-white w-min-max underline h-max right-8 mt-2 mr-4 text-secondary-light font-bold text-base md:text-xl rounded p-1 backdrop-filter backdrop-invert'
        >
          {iFrameOpen ? "Dim" : "Show"} <br></br>Iframe
        </button>
        <div className='absolute container z-0 font-Uchen flex leading-3 flex-col h-full w-4/5 self-center landscape:overflow-hidden'>
          <h1 className='h-1/7 w-max m-2 text-2xl md:text-5xl font-bold bg-white self-left rounded px-2 bg-opacity-100'>
            {projects[projectsIndex].title}
          </h1>
          <h3 className='h-max z-0 w-full italic my-auto text-base xs:text-xl xl:text-3xl bg-white  self-center rounded px-2 bg-opacity-100'>
            <strong>Tech: </strong>
            {projects[projectsIndex].technologies}
          </h3>
          <p className='h-auto z-0 text-sm my-auto xs:text-xl xl:text-3xl text-left bg-white w-full self-center rounded px-2 bg-opacity-100'>
            {projects[projectsIndex].description}
          </p>
          <nav className='w-11/12 h-1/7 z-0 animate-flip mt-auto justify-center text-black flex text-2xl lg:text-5xl m-2 mx-auto font-ShadowsIntoLight font-extrabold bg-white bg-opacity-100 rounded-3xl'>
            <a
              className='mx-auto underline'
              href={projects[projectsIndex].gitHubURL}
              target='_blank'
              rel='noreferrer'
            >
              GitHub Page
            </a>
            {"|"}
            <a
              className='mx-auto underline'
              href={projects[projectsIndex].siteURL}
              target='_blank'
              rel='noreferrer'
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
        "Inspired by a p5 spirograph. I modified the calculations, tied movement to mouse location, and added a change on click.",
      gitHubURL: "https://github.com/Jblack017/HoverGraph",
      siteURL: "https://blackhamjoshua.tech/HoverGraph/",
      technologies: "JavaScript & p5, HTML, CSS",
    },
    {
      title: "4Cast",
      description:
        "I wanted something that would forecast time series data, so I built this for my capstone at Flatiron.",
      gitHubURL: "https://github.com/Jblack017/4cast",
      siteURL: "https://blackhamjoshua.tech/4cast/",
      technologies:
        "Python, Flask, and FB Prophet hosted on Heroku, AlphaVantage for stock data, MaterialUI & React Frontend.",
    },
    {
      title: "This Site",
      description:
        "This was my first take at styling in TailwindCSS. Once setup, it can be very easy to inject custom styling into your components.",
      gitHubURL: "https://github.com/Jblack017/jblack017.github.io",
      siteURL: "https://blackhamjoshua.tech/",
      technologies:
        "HTML, React, JavaScript, TailwindCSS, react-typing-animation.",
    },
    {
      title: "SnackAttack",
      description:
        "The theme was food, the task was to build an App, the outcome...SnackTime!!! Pair project presented by Scooba Steve and Jblack. Enjoy!",
      gitHubURL: "https://github.com/Jblack017/SnackAttack",
      siteURL: "https://blackhamjoshua.tech/SnackAttack/",
      technologies: "HTML, React, JavaScript, Vanilla CSS",
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
