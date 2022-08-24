import { useContext, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import SelectAddressDialog from "components/Dialogs/SelectAddressDialog";
import AutoAddDialog from "components/Dialogs/AutoAddDialog";
import ManualAddDialog from "components/Dialogs/ManualAddDialog";
import { BequestButton, BequestInput } from "components/Bequest";

import { AddressContext } from "contexts/AddressContext";
import concatAddress from "utils/concatAddress";
import { Address } from "types/address";
import { AddressInputWrapper, Container } from "./style";

const AddressBook = () => {
  const { currentId, addrs } = useContext(AddressContext);

  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [openAuto, setOpenAuto] = useState<boolean>(false);
  const [openManual, setOpenManual] = useState<boolean>(false);
  const [currentAddr, setCurrentAddr] = useState<Address>();

  useEffect(() => {
    const addr = addrs.find((addr) => addr.id === currentId);
    addr && setCurrentAddr(addr);
  }, [currentId, addrs]);

  // handling SelectAddressDialog
  const handleOpenSelect = () => {
    setOpenSelect(true);
  };
  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  // handling AutoAddAddressDialog
  const handleOpenAuto = () => {
    setOpenManual(false);
    setOpenSelect(false);
    setOpenAuto(true);
  };
  const handleCloseAuto = (flg?: boolean) => {
    setOpenAuto(false);
    !flg && setOpenSelect(true);
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
            <BequestInput value={concatAddress(currentAddr)} disabled />
          </Grid>
          <Grid item md={3} xs={12}>
            <BequestButton onClick={handleOpenSelect}>
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
      />

      <ManualAddDialog
        open={openManual}
        handleClose={handleCloseManual}
        handleOpenNext={handleOpenAuto}
        title="Add address"
      />
    </Container>
  );
};

export default AddressBook;
