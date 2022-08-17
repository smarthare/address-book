import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AddressWrapper = styled("div")(() => ({
  maxWidth: "800px",

  "& h3": {
    fontSize: "1.5rem",
    fontFamily: "Gotham",
    fontWeight: "bold",
  },
}));

export const InputWrapper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px"
}));

export const StyledInput = styled("input")(() => ({
  color: "#15312E",
  width: "60%",
  border: "1px solid #333",
  outline: 0,
  height: "55px",
  padding: "0 1.5rem",
  background: "#fff",
  boxShadow: "none",
  borderRadius: "28px",
  font: "inherit",
  margin: 0,
}));

export const StyledButton = styled(ButtonBase)(() => ({
  width: "25%",
  height: "55px",
  borderRadius: "26px",
  color: "#fff",
  border: "1px solid transparent",
  boxShadow: "none",
  backgroundColor: "#333",
  fontSize: "16px",
  fontFamily: "Gotham",
  fontWeight: "bold",

  "&:hover": {
    transition: "all 0.3s",
  },
}));

export const StyledSelectButton = styled(StyledButton)(() => ({
  backgroundColor: "#333",

  "&:hover": {
    backgroundColor: "#BCBCBC",
  },
}));

export const StyledSaveButton = styled(StyledButton)(() => ({
  backgroundColor: "#FF4C50",

  "&:hover": {
    backgroundColor: "#FF817C",
  },
}));
