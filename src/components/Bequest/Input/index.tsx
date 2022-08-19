import { Typography } from "@mui/material";

import { BequestInputProps } from "types/props";
import { StyledInput } from "./style";

const BequestInput = (props: BequestInputProps) => {
  const { value, handleChange, required, ...rest } = props;

  return (
    <>
      <StyledInput defaultValue={value} onChange={handleChange} {...rest} />
      {required && (
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
