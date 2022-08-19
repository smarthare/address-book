import { styled } from "@mui/material/styles";

export const StyledInput = styled("input", {
  shouldForwardProp: (prop) => prop !== "gutterTop",
})(({ gutterTop }: { gutterTop?: boolean }) => ({
  margin: 0,
  padding: 0,
  color: "#15312E",
  width: "100%",
  border: "1px solid #333",
  outline: 0,
  height: "55px",
  background: "#fff",
  boxShadow: "none",
  borderRadius: "28px",
  font: "inherit",
  textIndent: "1.5rem",
  fontSize: "1.125rem",
  ...(gutterTop && { marginTop: "24px" }),

  "&:hover": {
    cursor: "text",
  },
}));
