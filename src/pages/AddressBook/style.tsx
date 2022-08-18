import { styled } from "@mui/material/styles";

export const Container = styled("div")(() => ({
  background: "#f6f5ea",
  flexGrow: 1,
  padding: "3.5vw 4vw",
}));

export const AddressInputWrapper = styled("div")(() => ({
  maxWidth: "800px",
}));

export const InputWrapper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
}));
