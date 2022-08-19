import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "disabled",
})(({ disabled }: { disabled?: boolean }) => ({
  margin: 0,
  ...(!disabled && { marginTop: "24px" }),
  padding: 0,
  width: "100%",
  height: "57px",
  background: "#fff",
  boxShadow: "none",
  outline: "none",
  border: "none",
  color: "#15312E",
  fontSize: "1.125rem",

  "& div": {
    border: "none",
    outline: "none",
  },

  "& .MuiInputBase-root": {
    height: "100%",
    border: "1px solid #333",
    borderRadius: "28px",
    outline: "none !important",

    "& fieldset": {
      border: "none",
    },

    "& input": {
      textIndent: "0.6rem",
      fontFamily: "Gotham",
      color: "#343A40",
      fontSize: "1.125rem",
      padding: "0px !important",
    },

    "& .MuiAutocomplete-popupIndicator": {
      background: "#333",
      color: "#fff",
    },

    ...(disabled && { "& .MuiAutocomplete-clearIndicator": { display: "none" } }),
  },
}));
