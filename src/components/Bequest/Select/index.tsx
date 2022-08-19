import { MenuItem } from "@mui/material";

import { BequestSelectProps } from "types/props";
import { StyledSelect } from "./style";

const BequestSelect = (props: BequestSelectProps) => {
  const { value, handleChange, options } = props;

  return (
    <StyledSelect value={value} label="Age" onChange={handleChange}>
      {options &&
        options.map((option, ind) => (
          <MenuItem key={`select-${option}-ind`} value={ind + 1}>
            {option}
          </MenuItem>
        ))}
    </StyledSelect>
  );
};

export default BequestSelect;
