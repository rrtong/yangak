import React from "react";
import "../styles/Results.css";

const Results = (props) => {
  return (
    <div className="results">
      <h1>{props.resultsTitle}</h1>
      <img src={props.resultsImage} alt="omgfaker" />
      <br />
      <br />
      <button
        className="results-home"
        onClick={() => {
          props.setShowResults(false);
          props.setShowHome(true);
        }}
      >
        another quiz?
      </button>
    </div>
  );
};

export default Results;
