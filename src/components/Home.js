import { React } from "react";
import Button from "@mui/material/Button";
import Faker from "../components/Faker";
import "../styles/Home.css";

const Home = (props) => {
  return (
    <div>
      <h1>yangak</h1>
      <Button
        onClick={() => {
          props.setShowHome(false);
          props.setShowQuiz(true);
        }}
      >
        Faker
      </Button>
    </div>
  );
};

export default Home;
