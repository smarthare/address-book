import { useContext } from "react";
import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";
import AddressCard from "./AddressCard";

import { AddressContext } from "contexts/AddressContext";
import { DialogEnhancedProps } from "types/props";
import { DialogState } from "types/dialogs";
import { StyledButton } from "./style";

const SelectAddressDialog = (props: DialogEnhancedProps) => {
  const { handleOpenNext, ...rest } = props;

  const { currentId, addrs, setEditId, setAddDialogState } =
    useContext(AddressContext);

  const handleAddressChange = (addressId: string) => () => {
    setAddDialogState(DialogState.EDIT);
    setEditId(addressId);
    handleOpenNext();
  };

  const handleAddAddress = () => {
    setAddDialogState(DialogState.NEW);
    handleOpenNext();
  }

  return (
    <DialogBase
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
      {...rest}
    >
      <Grid container>
        {addrs.length > 0 ? (
          addrs.map((addr) => (
            <AddressCard
              key={`address-${addr.id}`}
              addressId={addr.id}
              texts={addr.formatted_address}
              selected={currentId === addr.id}
              handleClick={handleAddressChange(addr.id)}
            />
          ))
        ) : (
          <AddressCard
            texts={["Add new address"]}
            selected
            newCard
            handleClick={handleAddAddress}
          />
        )}
      </Grid>

      <Grid container display="flex" justifyContent="end">
        <StyledButton onClick={handleAddAddress}>Add new address</StyledButton>
      </Grid>
    </DialogBase>
  );
};

export default SelectAddressDialog;
