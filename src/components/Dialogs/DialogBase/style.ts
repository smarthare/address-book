import { ButtonBase, Dialog, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  "& .MuiDialogContent-root": {
    padding: "24px",
  },

  "& .MuiDialogActions-root": {
    justifyContent: "space-between",
    padding: "16px 24px",
  },

  "& .MuiDialog-container": {
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
}));

export const StyledDialogTitle = styled(DialogTitle)(() => ({
  margin: 0,
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
}));

export const StyledCloseButton = styled(ButtonBase)(() => ({
  position: "absolute",
  display: "block",
  top: 0,
  right: 0,
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  paddingLeft: "12px",
  "&:hover": {
    backgroundColor: "rgba(51, 51, 51, 0.04)",
  },
}));
