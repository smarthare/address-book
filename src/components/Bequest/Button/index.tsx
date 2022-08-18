import { Grid } from "@mui/material";
import { BequestButtonProps } from "types/props";

import { StyledButton } from "./style";

const BequestButton = (props: BequestButtonProps) => {
  const { children, handleOnClick, ...rest } = props;

  return (
    <Grid item md={3} xs={12}>
      <StyledButton onClick={handleOnClick} {...rest}>
        {children}
      </StyledButton>
    </Grid>
  );
};

export default BequestButton;
