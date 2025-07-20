import React from "react";

const E9 = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="h-48  bg-green-100 rounded-md flex-grow"/>
        <div className="h-48 bg-green-200 rounded-md flex-grow"/>
        <div className="h-48 bg-[#aedf99] rounded-md flex-grow"/>
        <div className="h-48 bg-lime-300 rounded-md flex-grow"/>
      </div>
      <div className="h-56 bg-gray-700 flex gap-5 mt-4 p-4 rounded-lg">
        <div className="h48 flex-grow bg-sky-400 rounded-md"/>
        <div className="h48 flex-grow bg-sky-400 rounded-md"/>
      </div>
    </div>
  );
};

export default E9;
