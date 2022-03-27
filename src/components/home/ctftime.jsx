import * as React from "react";

const CTFtime = () => {
  return (
    <div 
      className="text-center mt-10 mb-28 w-64 mx-auto"
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="100"
      data-sal-easing="ease"  
    >
      <a
        className="text-4xl text-white"
        href="https://ctftime.org/team/49103"
        target="_blank"
        rel="noreferrer"
      >
        <div className="px-8 py-2 rounded-md shadow bg-violet-300 hover:bg-violet-400 transition duration-75 ease-out transform hover:scale-103">
          CTFtime
        </div>
      </a>
    </div>
  );
};

export default CTFtime;