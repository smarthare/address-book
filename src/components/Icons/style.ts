import { styled } from "@mui/material/styles";

export const IconWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "large",
})(({ large }: { large?: any }) => ({
  background: "#333",
  width: large ? "48px" : "26px",
  height: large ? "48px" : "26px",
  display: "flex",
  alignItems: "center",
  marginRight: "24px",
  borderRadius: "50%",
  justifyContent: "center",

  "& svg": {
    fontSize: large ? "36px" : "20px",
    color: "#fff",
  },
}));
