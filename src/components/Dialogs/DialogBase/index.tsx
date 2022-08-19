import { DialogContent, DialogActions, Typography } from "@mui/material";

import BequestButton from "components/Bequest/Button";
import { HomeIcon, CloseIcon } from "components/Icons";

import { DialogBaseProps } from "types/props";
import { StyledCloseButton, StyledDialog, StyledDialogTitle } from "./style";

const DialogBase = (props: DialogBaseProps) => {
  const {
    title,
    open,
    handleClose,
    handleOkAction,
    handleCancelAction,
    children,
  } = props;

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="xl"
      fullWidth
    >
      <StyledDialogTitle id="customized-dialog-title">
        <HomeIcon />

        <Typography fontSize="1.5rem" fontWeight="bold">
          {title}
        </Typography>

        <StyledCloseButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledDialogTitle>

      <DialogContent dividers>{children}</DialogContent>

      <DialogActions>
        <BequestButton handleOnClick={handleCancelAction} noWidth>Cancel</BequestButton>
        <BequestButton handleOnClick={handleOkAction} secondary noWidth>
          OK
        </BequestButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default DialogBase;
