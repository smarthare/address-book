import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";

import { DialogEnhanceProps } from "types/props";
import { StyledButton } from "./style";

const ManualAddDialog = (props: DialogEnhanceProps) => {
  const { open, title, handleClose, handleOpenNext } = props;

  return (
    <DialogBase
      open={open}
      handleClose={handleClose}
      title={title}
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
    >
      <Grid container display="flex" justifyContent="start">
        <StyledButton onClick={handleOpenNext}>Enter address manually</StyledButton>
      </Grid>
    </DialogBase>
  );
};

export default ManualAddDialog;
