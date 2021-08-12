import React, { useEffect, useState } from "react";
import emailImage from "../images/envelope.png";
import githubImage from "../images/octopus.png";
import linkdinImage from "../images/andromeda-chain.png";

export default function Footer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const classNames = {
    footer:
      "flex h-12 lg:h-20 font-ZenLoop w-full xs:w-2/3 space-x-4 py-2 mx-auto bg-white opacity-70 rounded-3xl ",
    strong:
      "flex-grow-0 ml-4 tracking-wider animate-point text-lg lg:text-3xl self-center ",
    linkContainer:
      "flex flex-grow mx-auto font-bold  tracking-wider text-xl lg:text-3xl justify-center items-center ",
    aTag: "w-1/3 ",
    contactImage: "mx-auto h-8 lg:h-16 w-1/8",
  };

  const contactDetails = [
    {
      title: "Email",
      link: "mailto: blackhamjoshua@comcast.net",
      image: emailImage,
      altText: "envelope",
    },
    {
      title: "GitHub",
      link: "https://github.com/Jblack017",
      image: githubImage,
      altText: "octopus",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/blackham~joshua/",
      image: linkdinImage,
      altText: "andromeda chain",
    },
  ];

  // count used and changed in renderContactIcons
  let count = contactDetails.length;
  const renderContactIcons = () => {
    return contactDetails.map(contactDetail => {
      count = count + 2;
      return (
        <a
          className={classNames.aTag}
          href={contactDetail.link}
          target='_blank'
          rel='noreferrer'
        >
          {seconds % count === 0 ? (
            <p>{contactDetail.title}</p>
          ) : (
            <img
              className={classNames.contactImage}
              src={contactDetail.image}
              alt={contactDetail.altText}
            ></img>
          )}
        </a>
      );
    });
  };

  return (
    <footer className={classNames.footer}>
      <strong className={classNames.strong}>Contact Me =></strong>
      <div className={classNames.linkContainer}>{renderContactIcons()}</div>
    </footer>
  );
}
