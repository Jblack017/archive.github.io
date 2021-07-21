import React, { useState } from "react";

export default function Projects() {
  const [projectsIndex, setProjectsIndex] = useState(0);

  const projectClassName = "absolute self-center h-4/5 w-4/5";

  const projectsIframe = [
    <iframe
      title='Destination: Mazatlan'
      className={projectClassName}
      src='https://blackhamjoshua.tech/4cast/'
    ></iframe>,
  ];

  const projects = [
    {
      title: "HoverGraph",
      description:
        "I was inspired when I crossed a p5 spirograph. I modified the calculations and tied movement to mouse location and added a change on click",
      gitHubURL: "https://github.com/Jblack017/HoverGraph",
      siteURL: "https://blackhamjoshua.tech/HoverGraph/",
      technologies: "JavaScript & p5, HTML, CSS, GitHub Pages",
    },
    {
      title: "4Cast",
      description:
        "Before starting Flatiron School, a friend turned me onto FBProphet for time series data forecasting. This project uses python and flask to support the integration of FB Prophet, AlphaVantage for stock time series data, and MaterialUI for the frontend.",
      gitHubURL: "https://github.com/Jblack017/HoverGraph",
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
      {projectsIframe}
    </content>
  );
}
