import { useContext, useEffect, useState } from "react";

import DialogBase from "../DialogBase";
import { BequestInput, BequestAutoSelect } from "components/bequest";

import { AddressContext } from "contexts/AddressContext";
import countries from "constants/countires";
import { DialogEnhancedProps } from "types/props";
import { Address } from "types/address";
import { StyledButton } from "./style";

const ManualAddDialog = (props: DialogEnhancedProps) => {
  const { handleOpenNext, handleClose, ...rest } = props;

  const { editId, addrs, setAddress, updateAddress } =
    useContext(AddressContext);

  const [addr, setAddr] = useState<Address>();
  const [country, setCountry] = useState<string>();
  const [line1, setLine1] = useState<string>();
  const [line2, setLine2] = useState<string>();
  const [line3, setLine3] = useState<string>();
  const [town, setTown] = useState<string>();
  const [county, setCounty] = useState<string>();
  const [postcode, setPostcode] = useState<string>();

  useEffect(() => {
    if (addr) {
      setLine1(addr.line_1);
      setLine2(addr.line_2);
      setLine3(addr.line_3);
      setTown(addr.town_or_city);
      setCounty(addr.county);
      setCountry(addr.country);
      setPostcode(addr.postcode);
    }
  }, [addr]);

  useEffect(() => {
    if (editId) {
      const _addr = addrs.find((addr) => addr.id === editId);
      setAddr(_addr);
    } else {
      setAddr(undefined);
    }
  }, [editId, addrs]);

  const handleSave = () => {
    if (line1 && town && country && postcode) {
      const newAddr = {
        line_1: line1,
        line_2: line2,
        line_3: line3,
        town_or_city: town,
        county,
        country,
        formatted_address: [line1, line2, line3, town, county],
      };

      editId
        ? updateAddress(editId, newAddr, postcode)
        : setAddress(newAddr, postcode);
      handleClose();
    }
  };

  return (
    <DialogBase
      handleOkAction={handleSave}
      handleCancelAction={handleClose}
      handleClose={handleClose}
      {...rest}
    >
      <StyledButton onClick={handleOpenNext} data-testid="dialogAutoBtn">
        Lookup address by postcode
      </StyledButton>

      <BequestInput
        placeholder="Line 1"
        key="line_1"
        value={addr && addr.line_1}
        handleChange={setLine1}
        gutterTop
        required
      />
      <br />

      <BequestInput
        placeholder="Line 2"
        key="line_2"
        value={addr && addr.line_2}
        handleChange={setLine2}
        gutterTop
      />
      <br />

      <BequestInput
        placeholder="Line 3"
        value={addr && addr.line_3}
        handleChange={setLine3}
        gutterTop
      />
      <br />

      <BequestInput
        placeholder="Town"
        value={addr && addr.town_or_city}
        handleChange={setTown}
        required
        gutterTop
      />
      <br />

      <BequestInput
        placeholder="County"
        value={addr && addr.county}
        handleChange={setCounty}
        gutterTop
      />
      <br />

      <BequestAutoSelect
        placeholder="Select Country"
        options={countries}
        defaultValue={addr ? addr.country : null}
        handleChange={setCountry}
      />
      <br />

      <BequestInput
        placeholder="Postcode"
        value={addr && addr.postcode}
        handleChange={setPostcode}
        gutterTop
        required
      />
      <br />
    </DialogBase>
  );
};

export default ManualAddDialog;
