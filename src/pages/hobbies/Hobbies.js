import React, { useState } from "react";

export default function Hobbies() {
  const [hobbiesIndex, setHobbiesIndex] = useState(0);

  const irameClassName =
    "absolute place-self-center rounded-3xl h-full w-full border-2 border-black";

  const hobbies = [
    {
      title: "Destination: Denver Zoo",
      description: "We Love Taking the Family to the Zoo!",
      source:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5317551323237!2d-104.95114168447742!3d39.7501678038308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c794e20258f71%3A0x53fd0ed23d876c29!2sDenver%20Zoo!5e0!3m2!1sen!2sus!4v1625373661323!5m2!1sen!2sus",
    },
    {
      title: "Technology: 3D Printing",
      description: "The Wife Bought Me a 3D Printer, I Printed a New Wife: )",
      source: "https://en.wikipedia.org/wiki/3D_printing",
    },
    {
      title: "Game: Poker",
      description: "",
      source: "https://en.wikipedia.org/wiki/World_Series_of_Poker",
    },
    {
      title: "Game: Magic The Gathering",
      description: "",
      source: "https://magic.wizards.com/en/mtgarena",
    },
    {
      title: "TV Show: Big Brother",
      description: "",
      source: "https://en.wikipedia.org/wiki/Big_Brother_(American_TV_series)",
    },
    {
      title: "TV Show: Survivor",
      description: "",
      source: "https://en.wikipedia.org/wiki/Survivor_(American_TV_series)",
    },
    {
      title: "TV Show: The Amazing Race",
      description: "",
      source: "https://en.wikipedia.org/wiki/The_Amazing_Race",
    },
    {
      title: "Destination: Mazatlan",
      description: "",
      source:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117308.79773474668!2d-106.49231753223347!3d23.246728325066588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f5341681837c1%3A0x62a4c4aaf13c72b2!2sMazatl%C3%A1n%2C%20Sinaloa%2C%20Mexico!5e0!3m2!1sen!2sus!4v1626228748531!5m2!1sen!2sus",
    },
  ];

  return (
    <div className='flex w-screen h-auto justify-center'>
      <button
        className='z-50 filter w-8 mr-auto bg-opacity-95 bg-primary rounded-l-lg invert'
        value={hobbiesIndex}
        onClick={e =>
          setHobbiesIndex(
            hobbiesIndex === 0 ? hobbies.length - 1 : --e.target.value
          )
        }
      >
        {"<"}
      </button>
      <iframe
        title={hobbies[hobbiesIndex].title}
        className={irameClassName}
        src={hobbies[hobbiesIndex].source}
      ></iframe>
      {/* <p className='absolute self-end p-2 text-sm h-max w-max ring-4 ring-black bg-opacity-90 rounded-full mb-4 bg-primary ring-opacity-50 ring-offset-4 ring-offset-secondary'>
        {hobbies[hobbiesIndex].description}
      </p> */}
      <button
        className='z-50 filter w-8 ml-auto bg-opacity-95 bg-primary rounded-r-lg invert'
        value={hobbiesIndex}
        onClick={e =>
          setHobbiesIndex(
            hobbiesIndex === hobbies.length - 1 ? 0 : ++e.target.value
          )
        }
      >
        {">"}
      </button>
    </div>
  );
}
