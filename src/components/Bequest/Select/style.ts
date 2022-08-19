import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(Select)(() => ({
  marginTop: "10px",
  width: "100%",
  border: "1px solid #333",
  borderRadius: "28px",

  "& fieldset": {
    border: "none",
  },
}));
