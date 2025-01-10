import React from "react";
import {
  Button,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
const Faker = (props) => {
  return (
    <div>
      <h1>test</h1>
      <FormControl>
        <RadioGroup>
          <FormControlLabel
            value="lebalnc"
            control={<Radio />}
            label="lebalnc"
          />
          <FormControlLabel value="azir" control={<Radio />} label="azir" />
          <FormControlLabel value="ryze" control={<Radio />} label="ryze" />
          <FormControlLabel value="ahri" control={<Radio />} label="ahri" />
        </RadioGroup>
        <Button
          onClick={() => {
            props.setShowQuiz(false);
            props.setShowResults(true);
          }}
        >
          chec
        </Button>
      </FormControl>
    </div>
  );
};

export default Faker;
