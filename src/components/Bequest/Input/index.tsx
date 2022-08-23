import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { BequestInputProps } from "types/props";
import { StyledInput } from "./style";

const BequestInput = (props: BequestInputProps) => {
  const { value, required, handleChange, ...rest } = props;

  const [require, setRequire] = useState<boolean>(false);

  useEffect(() => {
    setRequire(!!(!value && required));
  }, [value, required]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _value = e.target.value;
    setRequire(!!(!_value && required));
    handleChange(_value);
  };

  return (
    <>
      <StyledInput
        defaultValue={value}
        key={value}
        onChange={handleOnChange}
        {...rest}
      />

      {require && (
        <>
          <Typography fontSize="1.125rem" color="#FF4C50">
            Required
          </Typography>
          <br />
        </>
      )}
    </>
  );
};

export default BequestInput;
