import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";
import AddressCard from "./AddressCard";

import { DialogEnhancedProps } from "types/props";
import { StyledButton } from "./style";

const SelectAddressDialog = (props: DialogEnhancedProps) => {
  const { handleOpenNext, ...rest } = props;

  return (
    <DialogBase
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
      {...rest}
    >
      <Grid container onClick={handleOpenNext}>
        <AddressCard texts={["Add new address"]} selected newCard />
      </Grid>

      <Grid container display="flex" justifyContent="end">
        <StyledButton onClick={handleOpenNext}>Add new address</StyledButton>
      </Grid>
    </DialogBase>
  );
};

export default SelectAddressDialog;
