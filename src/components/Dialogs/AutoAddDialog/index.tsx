import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";
import { BequestButton, BequestInput } from "components/Bequest";

import { DialogEnhanceProps } from "types/props";
import { StyledButton } from "./style";

const AutoAddDialog = (props: DialogEnhanceProps) => {
  const { open, title, handleClose, handleOpenNext } = props;

  return (
    <DialogBase
      open={open}
      handleClose={handleClose}
      title={title}
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
    >
      <Grid container>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item md={8} xs={12}>
            <BequestInput disabled />
          </Grid>
          <Grid item md={3} xs={12} spacing-xs-1>
            <BequestButton handleOnClick={() => {}}>Find Address</BequestButton>
          </Grid>
        </Grid>
        <StyledButton onClick={handleOpenNext}>
          Enter address manually
        </StyledButton>
      </Grid>
    </DialogBase>
  );
};

export default AutoAddDialog;
