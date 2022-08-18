import { ButtonBase, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled("button")(() => ({
  background: "none",
  border: "none",
  outline: "none",
  textDecoration: "underline",
  fontSize: "1.125rem",
  color: "#333",
  cursor: "pointer"
}));