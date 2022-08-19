import { useState } from "react";
import { Grid, Typography } from "@mui/material";

import SelectAddressDialog from "components/Dialogs/SelectAddressDialog";
import AutoAddDialog from "components/Dialogs/AutoAddDialog";
import ManualAddDialog from "components/Dialogs/ManualAddDialog";
import { BequestButton, BequestInput } from "components/Bequest";

import { AddressInputWrapper, Container } from "./style";

const AddressBook = () => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [openAuto, setOpenAuto] = useState<boolean>(false);
  const [openManual, setOpenManual] = useState<boolean>(false);

  // handling SelectAddressDialog
  const handleOpenSelect = () => {
    setOpenSelect(true);
  };
  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  // handling AutoAddAddressDialog
  const handleOpenAuto = () => {
    setOpenSelect(false);
    setOpenAuto(true);
  };
  const handleCloseAuto = () => {
    setOpenAuto(false);
    setOpenSelect(true);
  };

  // handling ManualAddAddressDialog
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
        <Typography variant="h3" fontSize="1.5rem" fontWeight="bold">
          Address:
        </Typography>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          marginTop="24px"
        >
          <Grid item md={8} xs={12}>
            <BequestInput value="" disabled />
          </Grid>
          <Grid item md={3} xs={12}>
            <BequestButton handleOnClick={handleOpenSelect}>
              Select Address
            </BequestButton>
          </Grid>
        </Grid>
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
