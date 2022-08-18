import { ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "secondary",
})(({ secondary }: { secondary?: any }) => ({
  height: "55px",
  borderRadius: "26px",
  color: "#fff",
  border: "1px solid transparent",
  boxShadow: "none",
  backgroundColor: secondary ? "#FF4C50" : "#333",
  fontSize: "16px",
  fontFamily: "Gotham",
  fontWeight: "bold",
  padding: "0 32px",

  "&:hover": {
    transition: "all 0.3s",
    backgroundColor: secondary ? "#FF817C" : "#BCBCBC",
  },
}));