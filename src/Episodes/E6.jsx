import React from "react";

const E6 = () => {
  return (
    <div className="h-screen bg-black w-screen">
      <div
        className="
     flex
     flex-col
     w-full
     items-center
     gap-5
     pt-3
     justify-center
     mx-auto
     sm:flex-row
     sm:flex-wrap
     xl:w-3/4
     2xl:w-1/3
       "
      >
        <div 
        className="bg-pink-400 h-40 djac text-white text-2xl w-5/6 sm:w-64 md:w-auto md:flex-grow">
          item 1
        </div>
        <div 
        className="bg-pink-400 h-40 djac text-white text-2xl w-5/6 sm:w-64 md:w-auto md:flex-grow">
          item 2
        </div>
        <div 
        className="bg-pink-400 h-40 djac text-white text-2xl w-5/6 sm:w-64 md:w-auto md:flex-grow">
          item 3
        </div>
      </div>
    </div>
  );
};

export default E6;
