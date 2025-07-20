import React from "react";

const E12 = () => {
  return (
    <div className="fullCenter gap-3">
      <div className="bg-sky-100 w-44 h-44 rounded-lg flex items-end gap-3 overflow-auto">
        <span className="block w-12 h-1/6 bg-cyan-400 flex-shrink-0" />
        <span className="block w-12 h-1/6 bg-cyan-400 flex-shrink-0" />
        <span className="block w-12 h-1/6 bg-cyan-400 flex-shrink-0" />
        <span className="block w-12 h-1/6 bg-cyan-400 flex-shrink-0" />
        <span className="block w-12 h-1/6 bg-cyan-400 flex-shrink-0" />
        <span className="block w-12 h-1/6 bg-cyan-400 flex-shrink-0" />
      </div>
      <div className="bg-lime-100 w-44 h-44 rounded-lg relative">
        <span className="block w-1/6 h-1/6 bg-green-400 absolute left-0 right-0 bottom-0 mx-auto" />
      </div>
      <div className="bg-lime-200 w-44 h-44 rounded-lg invisible" />
      <div className="bg-lime-300 w-44 h-44 rounded-lg hidden" />
      <div className="border w-44 h-44 rounded-lg relative z-0">
        <span 
        className="block h-5/6 w-5/6 bg-green-100 absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
        <span 
        className="block h-4/6 w-4/6 bg-green-200 absolute bottom-0 left-1/2 -translate-x-1/2 z-20" />
        <span 
        className="block h-3/6 w-3/6 bg-green-300 absolute bottom-0 left-1/2 -translate-x-1/2 z-30" />
        <span 
        className="block h-2/6 w-2/6 bg-green-400 absolute bottom-0 left-1/2 -translate-x-1/2 z-40" />
        <span 
        className="block h-1/6 w-1/6 bg-green-500 absolute bottom-0 left-1/2 -translate-x-1/2 z-50" />
      </div>
    </div>
  );
};

export default E12;
