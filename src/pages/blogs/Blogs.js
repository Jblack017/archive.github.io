import React from "react";
import Tilt from "react-parallax-tilt";

export default function Blogs() {
  const posts = [
    {
      src: "https://miro.medium.com/max/1400/1*5WRFimXHVL9BVtDGcQQttg.jpeg",
      clickLink:
        "https://blackhamjoshua.medium.com/ternary-on-the-water-d7138f710776",
      title: "Ternary on the water",
      body: "...truthy or falsy...",
    },
    {
      src: "https://miro.medium.com/max/666/1*wYr5lFoV_ua4nZA5dXgRPw.png",
      clickLink:
        "https://blackhamjoshua.medium.com/was-that-week-1-or-month-1-f136b3ad4d10",
      title: "Was That Week 1, or Month 1?",
      body: "The Beginning of a Full Stack Developer...",
    },
  ];

  const renderPost = () => {
    let count = 0;
    return posts.map(post => {
      let position = count % 2 ? "order-3" : "";
      ++count;

      return (
        <Tilt
          gyroscope={true}
          glareEnable={true}
          glarePosition={"right"}
          glareColor={"#000000"}
          glareBorderRadius={"1rem"}
          transitionSpeed={5000}
        >
          <button
            onClick={() => window.open(post.clickLink)}
            className='flex w-full h-min bg-opacity-60 bg-white rounded-2xl border-primary border-2 border-opacity-75 rounded '
          >
            <img
              className={"w-1/3 self-center rounded-2xl " + position}
              src={post.src}
              alt={post.title}
            ></img>
            <h1 className='w-1/3 h-full text-base font-bold font-Uchen self-center md:text-xl lg:text-3xl'>
              {post.title}
            </h1>
            <p className='w-1/3 text-sm self-center font-Uchen md:text-xl lg:text-2xl'>
              {post.body}
            </p>
          </button>
        </Tilt>
      );
    });
  };

  return (
    <div className='flex flex-col font-Uchen space-y-2 my-auto px-2 text-3xl h-full w-full justify-center items-center backdrop-filter backdrop-hue-rotate-90 rounded-3xl'>
      {renderPost()}
    </div>
  );
}
