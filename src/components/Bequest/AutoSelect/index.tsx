import { useEffect, useState } from "react";
import { Autocomplete, Typography } from "@mui/material";

import { StyledTextField } from "./style";
import { BequestSelectProps } from "types/props";

const BequestSelect = (props: BequestSelectProps) => {
  const { placeholder, options, ...rest } = props;

  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {console.log(value)}, [value])

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          newValue && setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options || []}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <StyledTextField placeholder={placeholder} {...params} {...rest} />
        )}
      />

      <Typography fontSize="1.125rem" color="#FF4C50">
        Required
      </Typography>
    </>
  );
};

export default BequestSelect;
