import React, { useContext, useEffect, useState } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";

import DialogBase from "../DialogBase";
import { BequestButton, BequestInput, BequestSelect } from "components/bequest";

import { AddressContext } from "contexts/AddressContext";
import { DialogEnhancedProps } from "types/props";
import { StyledButton } from "./style";
import concatAddress from "utils/concatAddress";
import { DialogState } from "types/dialogs";

const AutoAddDialog = (props: DialogEnhancedProps) => {
  const { handleOpenNext, handleClose, ...rest } = props;

  const {
    loading,
    addrs,
    candiAddrs,
    editId,
    addDialogState,
    setEditId,
    findAddress,
    setAddress,
    updateAddress,
    getFullAddress,
    setAddDialogState,
  } = useContext(AddressContext);

  const [postcode, setPostcode] = useState<string>();
  const [formattedAddrs, setFormattedAddrs] = useState<Array<string>>();
  const [candi, setCandi] = useState<number>();
  const [data, setData] = useState<any>({ inputValue: "", title: "" });
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (candiAddrs) {
      const _formattedAddrs = candiAddrs.map((addr) => concatAddress(addr));
      setFormattedAddrs(_formattedAddrs);
      setData((prev: any) => ({ ...prev, selectShow: true }));
    }
  }, [candiAddrs]);

  useEffect(() => {
    let _data = {};

    switch (addDialogState) {
      case DialogState.NEW:
        _data = {
          title: "Add address",
          inputValue: "",
          manualShow: true,
          selectShow: false,
        };
        setError(false);
        setEditId(undefined);
        setCandi(undefined);
        break;
      case DialogState.EDIT:
        const fullAddress = getFullAddress(editId);
        _data = {
          title: "Find address",
          inputValue: fullAddress.postcode,
          manualShow: true,
          selectShow: false,
        };
        setError(false);
        setPostcode(fullAddress.postcode);
        break;
      case DialogState.CANDI:
        formattedAddrs &&
          candi &&
          (_data = {
            title: "Edit address",
            inputValue: formattedAddrs[candi - 1],
            manualShow: false,
            selectShow: false,
          });
        break;
    }

    setData(_data);

    // We can ignore eslint warning because
    // there are no cases where errors can occur.
    // eslint-disable-next-line
  }, [addDialogState, editId, addrs]);

  const handlePostcodeChange = (_postcode: string) => {
    setPostcode(_postcode);
  };

  const handleFindClick = async () => {
    if (postcode) {
      const result = await findAddress(postcode);
      setError(!result);
    }
  };

  const handleUnsetClick = () => {
    setData((prev: any) => ({
      ...prev,
      selectShow: true,
    }));
  };

  const handleAutoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const _candi = parseInt(e.target.value);
    setCandi(_candi);

    if (addDialogState === DialogState.CANDI && formattedAddrs) {
      setData((prev: any) => ({
        ...prev,
        inputValue: formattedAddrs[_candi - 1],
        selectShow: false,
      }));
    } else {
      setAddDialogState(DialogState.CANDI);
    }
  };

  const handleOkClick = () => {
    if (candi) {
      if (editId) {
        updateAddress(editId, candiAddrs[candi - 1], postcode);
      } else {
        setAddress(candiAddrs[candi - 1], postcode);
      }
      handleClose(true);
    }
  };

  return (
    <DialogBase
      handleOkAction={handleOkClick}
      handleCancelAction={handleClose}
      handleClose={handleClose}
      title={data.title}
      data-testid="AutoAddDialog"
      {...rest}
    >
      <Grid container>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item md={8} xs={12}>
            <BequestInput
              value={data.inputValue}
              key={data.inputValue}
              handleChange={handlePostcodeChange}
              data-testid="dialogInput"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            {loading ? (
              <CircularProgress />
            ) : (
              <BequestButton
                onClick={
                  addDialogState === DialogState.CANDI
                    ? handleUnsetClick
                    : handleFindClick
                }
                data-testid="dialogActBtn"
              >
                {data.title}
              </BequestButton>
            )}
          </Grid>
        </Grid>

        {error && (
          <Typography
            fontSize="1.125rem"
            color="red"
            width="100%"
            marginTop="16px"
            data-testid="dialogErrorMsg"
          >
            We couldn't get the address.
          </Typography>
        )}

        {data.manualShow && (
          <StyledButton onClick={handleOpenNext} data-testid="dialogManualBtn">
            Enter address manually
          </StyledButton>
        )}

        {data.selectShow && formattedAddrs && formattedAddrs.length > 0 && (
          <Grid container marginTop="32px">
            <Typography fontSize="1rem" marginLeft="5px">
              Select the address from the list
            </Typography>
            <BequestSelect
              defaultValue={candi}
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
