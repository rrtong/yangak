import React from "react";
import faker from "../assets/fakerpog.png";

const Results = (props) => {
  return (
    <div>
      <h1>omgg u r fakr</h1>
      <img src={faker} alt="omgfaker" />;
      <button
        onClick={() => {
          props.setShowResults(false);
          props.setShowHome(true);
        }}
      >
        go home
      </button>
    </div>
  );
};

export default Results;
