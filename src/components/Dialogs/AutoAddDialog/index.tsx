import React, { useContext, useEffect, useState } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";

import DialogBase from "../DialogBase";
import AddressInput from "./AddressInput";
import { BequestButton, BequestSelect } from "components/Bequest";

import { AddressContext } from "contexts/AddressContext";
import { DialogEnhanceProps } from "types/props";
import { StyledButton } from "./style";
import concatAddress from "utils/concatAddress";

const AutoAddDialog = (props: DialogEnhanceProps) => {
  const { handleOpenNext, ...rest } = props;

  const { loading, candiAddrs, findAddress } = useContext(AddressContext);

  const [postcode, setPostcode] = useState<string>();
  const [formattedAddrs, setFormattedAddrs] = useState<Array<string>>();
  const [candi, setCandi] = useState<number | "">("");

  useEffect(() => {
    if (candiAddrs) {
      const _formattedAddrs = candiAddrs.map((addr) => concatAddress(addr));
      setFormattedAddrs(_formattedAddrs);
    }
  }, [candiAddrs]);

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
  };

  const handleFindBtnClick = () => {
    postcode && findAddress(postcode);
  };

  const handleAutoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCandi(parseInt(e.target.value));
  };

  return (
    <DialogBase
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
      {...rest}
    >
      <Grid container>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item md={8} xs={12}>
            <AddressInput
              value={candi || postcode}
              handleChange={handlePostcodeChange}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            {loading ? (
              <CircularProgress />
            ) : (
              <BequestButton onClick={handleFindBtnClick}>
                Find Address
              </BequestButton>
            )}
          </Grid>
        </Grid>

        <StyledButton onClick={handleOpenNext}>
          Enter address manually
        </StyledButton>

        {formattedAddrs && formattedAddrs.length > 0 && (
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
