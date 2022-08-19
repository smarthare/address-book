import { useState } from "react";
import { Autocomplete, Typography } from "@mui/material";

import { StyledTextField } from "components/Bequest/Select/style";

type Props = {};
const options = ["option1", "option2"];

const BequestSelect = (props: Props) => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: "100%" }}
        renderInput={(params) => <StyledTextField {...params} />}
      />

      <Typography fontSize="1.125rem" color="#FF4C50">
        Required
      </Typography>
    </>
  );
};

export default BequestSelect;
