import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";

import { DialogEnhanceProps } from "types/props";
import { StyledButton } from "./style";
import { BequestButton, BequestInput } from "components/Bequest";

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
          <BequestInput />
          <BequestButton handleOnClick={() => {}}>
            Find Address
          </BequestButton>
        </Grid>
        <StyledButton onClick={handleOpenNext}>
          Enter address manually
        </StyledButton>
      </Grid>
    </DialogBase>
  );
};

export default AutoAddDialog;
