import { styled } from "@mui/material/styles";

export const Container = styled("div")(() => ({
  background: "#f6f5ea",
  flexGrow: 1,
  padding: "3.5vw 4vw",

  "& h1": {
    fontSize: "2.25rem",
    fontFamily: "Gotham",
    fontWeight: "bold",
    margin: 0,
  },

  "& p": {
    margin: 0,
    fontSize: "1.125rem",
    fontFamily: "Gotham",
    lineHeight: 1.5,
  },
}));
