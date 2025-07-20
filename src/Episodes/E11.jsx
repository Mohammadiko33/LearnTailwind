import React, { useState } from "react";

const E11 = () => {

  const [isDisableSecondBtn1, setIsDisableSecondBtn1] = useState(false);
  const [isDisableSecondBtn2, setIsDisableSecondBtn2] = useState(true);

  return (
    <div className="fullCenterCol gap-2">
      <button
        className="btn disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"
        onClick={() => setIsDisableSecondBtn2(!isDisableSecondBtn2)}
        disabled={isDisableSecondBtn1}
      >
        {isDisableSecondBtn1 ? "Not Allowed" : "btn1 Click Me"}
      </button>
      <button
        className="btn btn-secondary disabled:hover:bg-none disabled:cursor-not-allowed disabled:opacity-50  hover:bg-lime-500 focus:ring-lime-400 active:bg-lime-600"
        onClick={() => setIsDisableSecondBtn1(!isDisableSecondBtn1)}
        disabled={isDisableSecondBtn2}
      >
        {isDisableSecondBtn2 ? "Not Allowed" : "btn2 Click Me"}
      </button>
    </div>
  );
};

export default E11;
