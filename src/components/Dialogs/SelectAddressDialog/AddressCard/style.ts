import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const StyledAddressCard = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ selected }: { selected?: any }) => ({
  cursor: "pointer",
  padding: "10px",

  "&>div": {
    ...(selected && {
      background: "#333",
      "& *": {
        color: "#fff",
      },
    }),
    border: "1px solid #D9D9D9",
    borderRadius: "10px",
    padding: "16px",
  },
}));

export const StyledAddressCardHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
}));
