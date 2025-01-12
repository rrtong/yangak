import React, { useState } from "react";
import sktfaker from "../assets/faker/2015faker.gif";
import t1faker from "../assets/faker/2022faker.gif";

import "../styles/Faker.css";

const Faker = (props) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLeadership, setSelectedLeadership] = useState("");

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleLeadership = (event) => {
    setSelectedLeadership(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedLeadership === "leader") {
      props.setResultsTitle("You are T1 Faker");
      props.setResultsImage(t1faker);
    } else {
      props.setResultsTitle("You are SKT T1 Faker");
      props.setResultsImage(sktfaker);
    }

    props.setShowQuiz(false);
    props.setShowResults(true);
  };

  return (
    <div className="faker">
      <form className="form" onSubmit={() => {}}>
        <div>
          <h3>which role do you main?</h3>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="top"
                checked={selectedRole === "top"}
                onChange={handleChange}
              />
              Top
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="jungle"
                checked={selectedRole === "jungle"}
                onChange={handleChange}
              />
              Jungle
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="mid"
                checked={selectedRole === "mid"}
                onChange={handleChange}
              />
              Mid
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="adc"
                checked={selectedRole === "adc"}
                onChange={handleChange}
              />
              Adc
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="support"
                checked={selectedRole === "support"}
                onChange={handleChange}
              />
              Support
            </label>
          </div>
        </div>
        <div>
          <h3>What is your playstyle?</h3>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="leader"
                checked={selectedLeadership === "leader"}
                onChange={handleLeadership}
              />
              I play for the team
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="solo"
                checked={selectedLeadership === "solo"}
                onChange={handleLeadership}
              />
              I play for myself
            </label>
          </div>
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Faker;
