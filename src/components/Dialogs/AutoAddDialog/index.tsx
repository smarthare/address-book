import React, { useContext, useEffect, useState } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";

import DialogBase from "../DialogBase";
import AddressInput from "./AddressInput";
import { BequestButton, BequestInput, BequestSelect } from "components/Bequest";

import { AddressContext } from "contexts/AddressContext";
import { DialogEnhancedProps } from "types/props";
import { StyledButton } from "./style";
import concatAddress from "utils/concatAddress";

const AutoAddDialog = (props: DialogEnhancedProps) => {
  const { handleOpenNext, handleClose, ...rest } = props;

  const { loading, candiAddrs, findAddress, setAddress } =
    useContext(AddressContext);

  const [postcode, setPostcode] = useState<string>();
  const [formattedAddrs, setFormattedAddrs] = useState<Array<string>>();
  const [candi, setCandi] = useState<number | "">("");
  const [isEditMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    if (candiAddrs) {
      const _formattedAddrs = candiAddrs.map((addr) => concatAddress(addr));
      setFormattedAddrs(_formattedAddrs);
    }
  }, [candiAddrs]);

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
  };

  const handleFindClick = () => {
    postcode && findAddress(postcode);
  };

  const handleUnsetCLick = () => {
    setEditMode(false);
  };

  const handleAutoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCandi(parseInt(e.target.value));
    setEditMode(true);
  };

  const handleOkClick = () => {
    candiAddrs && candi && setAddress(candiAddrs[candi]);
    handleClose(true);
  };

  return (
    <DialogBase
      handleOkAction={handleOkClick}
      handleCancelAction={handleClose}
      handleClose={handleClose}
      {...rest}
    >
      <Grid container>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item md={8} xs={12}>
            {isEditMode ? (
              <AddressInput value={candi} handleChange={handlePostcodeChange} />
            ) : (
              <BequestInput
                value={postcode}
                handleChange={handlePostcodeChange}
              />
            )}
          </Grid>
          <Grid item md={3} xs={12}>
            {loading ? (
              <CircularProgress />
            ) : (
              <BequestButton
                onClick={isEditMode ? handleUnsetCLick : handleFindClick}
              >
                {isEditMode ? "Edit Address" : "Find Address"}
              </BequestButton>
            )}
          </Grid>
        </Grid>

        {!isEditMode && (
          <StyledButton onClick={handleOpenNext}>
            Enter address manually
          </StyledButton>
        )}

        {!isEditMode && formattedAddrs && formattedAddrs.length > 0 && (
          <Grid container marginTop="32px">
            <Typography fontSize="1rem" marginLeft="5px">
              Select the address from the list
            </Typography>
            <BequestSelect
              value={candi}
              options={formattedAddrs}
              handleChange={handleAutoChange}
            />
          </Grid>
        )}
      </Grid>
    </DialogBase>
  );
};

export default AutoAddDialog;
