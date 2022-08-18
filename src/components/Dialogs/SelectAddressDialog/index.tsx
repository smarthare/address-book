import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";
import AddressCard from "./AddressCard";

import { DialogEnhanceProps } from "types/props";
import { StyledButton } from "./style";

const SelectAddressDialog = (props: DialogEnhanceProps) => {
  const { open, title, handleClose, handleOpenNext } = props;

  return (
    <DialogBase
      open={open}
      handleClose={handleClose}
      title={title}
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
    >
      <Grid container>
        <AddressCard texts={["Add new address"]} selected newCard />
      </Grid>

      <Grid container display="flex" justifyContent="end">
        <StyledButton onClick={handleOpenNext}>Add new address</StyledButton>
      </Grid>
    </DialogBase>
  );
};

export default SelectAddressDialog;
