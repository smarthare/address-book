import { useEffect, useState } from "react";
import { Autocomplete, Typography } from "@mui/material";

import { StyledTextField } from "./style";
import { BequestAutoSelectProps } from "types/props";

const BequestAutoSelect = (props: BequestAutoSelectProps) => {
  const { placeholder, options, defaultValue, handleChange } = props;

  const [value, setValue] = useState<string | null>(
    defaultValue as unknown as string | null
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [require, setRequire] = useState<boolean>(false);

  useEffect(() => {
    setRequire(!defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    handleChange(value);
    setRequire(!value);
  }, [value, handleChange]);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(e: any, newValue: string | null) => {
          newValue && setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options || []}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <StyledTextField placeholder={placeholder} {...params} />
        )}
      />

      {require && (
        <Typography fontSize="1.125rem" color="#FF4C50">
          Required
        </Typography>
      )}
    </>
  );
};

export default BequestAutoSelect;
