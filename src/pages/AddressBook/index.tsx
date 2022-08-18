import { useState } from "react";
import { Typography } from "@mui/material";

import SelectAddressDialog from "components/Dialogs/SelectAddressDialog";
import AutoAddDialog from "components/Dialogs/AutoAddDialog";
import ManualAddDialog from "components/Dialogs/ManualAddDialog";
import { BequestButton, BequestInput } from "components/Bequest";

import { AddressInputWrapper, Container, InputWrapper } from "./style";

const AddressBook = () => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [openAuto, setOpenAuto] = useState<boolean>(false);
  const [openManual, setOpenManual] = useState<boolean>(false);

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };
  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenAuto = () => {
    setOpenSelect(false);
    setOpenAuto(true);
  };
  const handleCloseAuto = () => {
    setOpenAuto(false);
    setOpenSelect(true);
  };

  const handleOpenManual = () => {
    setOpenAuto(false);
    setOpenManual(true);
  };
  const handleCloseManual = () => {
    setOpenManual(false);
    setOpenSelect(true);
  };

  return (
    <Container>
      <Typography variant="h1" fontSize="2.25rem" fontWeight="bold">
        Address Book
      </Typography>
      <Typography fontSize="1.125rem" sx={{ marginBottom: "24px" }}>
        Welcome back to your address book.
      </Typography>

      <AddressInputWrapper>
        <Typography
          variant="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          sx={{ marginBottom: "24px" }}
        >
          Address:
        </Typography>
        <InputWrapper>
          <BequestInput />
          <BequestButton handleOnClick={handleOpenSelect}>
            Select Address
          </BequestButton>
        </InputWrapper>
      </AddressInputWrapper>

      <SelectAddressDialog
        open={openSelect}
        handleClose={handleCloseSelect}
        handleOpenNext={handleOpenAuto}
        title="Select Address"
      />

      <AutoAddDialog
        open={openAuto}
        handleClose={handleCloseAuto}
        handleOpenNext={handleOpenManual}
        title="Add address"
      />

      <ManualAddDialog
        open={openManual}
        handleClose={handleCloseManual}
        handleOpenNext={handleOpenManual}
        title="Add address"
      />
    </Container>
  );
};

export default AddressBook;
