import { Grid } from "@mui/material";
import { BequestInputProps } from "types/props";

import { StyledInput } from "./style";

const BequestInput = (props: BequestInputProps) => {
  return (
    <>
      <Grid item md={8} xs={12}>
        <StyledInput />
      </Grid>
      <Grid item md={1} xs={0} />
    </>
  );
};

export default BequestInput;
