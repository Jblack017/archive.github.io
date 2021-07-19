import React, { useEffect } from "react";

export default function Blogs() {

  useEffect(() => {
    fetch("https://blackhamjoshua.medium.com/")
    .then(console.log)
  }, [])
  return (
    <div className='flex text-3xl h-full w-full justify-center items-center backdrop-filter backdrop-hue-rotate-90 rounded-3xl'>
      BLOGS
    </div>
  );
}
