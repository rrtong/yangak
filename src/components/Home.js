import { React } from "react";
import "../styles/Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <h1>yangak</h1>
      <button
        className="home-button"
        onClick={() => {
          props.setShowHome(false);
          props.setShowQuiz(true);
        }}
      >
        Faker
      </button>
    </div>
  );
};

export default Home;
