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

  const handleClickCloe = () => {
    handleClose();
  }

  return (
    <StyledDialog
      onClose={handleClickCloe}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="xl"
      fullWidth
    >
      <StyledDialogTitle id="customized-dialog-title">
        <HomeIcon />

        <Typography fontSize="1.5rem" fontWeight="bold" data-testid="dialogTitle">
          {title}
        </Typography>

        <StyledCloseButton aria-label="close" onClick={handleClickCloe}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledDialogTitle>

      <DialogContent dividers data-testid="dialogContent">{children}</DialogContent>

      <DialogActions>
        <BequestButton onClick={handleCancelAction} noWidth>Cancel</BequestButton>
        <BequestButton onClick={handleOkAction} secondary noWidth>
          OK
        </BequestButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default DialogBase;
