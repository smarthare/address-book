import { useContext } from "react";
import { Typography } from "@mui/material";

import { CheckIcon, HomeIcon } from "components/icons";

import { AddressContext } from "contexts/AddressContext";
import { AddressCardProps } from "types/props";
import { StyledAddressCard, StyledAddressCardHeader } from "./style";
import { StyledButton } from "../style";

const AddressCard = (props: AddressCardProps) => {
  const { addressId, texts, selected, newCard, handleClick } = props;

  const { setCurrentId } = useContext(AddressContext);

  const handleClickSetWrapper = () => {
    newCard ? handleClick() : addressId && setCurrentId(addressId);
  };

  return (
    <StyledAddressCard
      xs={12}
      sm={12}
      md={6}
      lg={4}
      item
      selected={selected}
      onClick={handleClickSetWrapper}
    >
      <div>
        <StyledAddressCardHeader>
          <HomeIcon />
          {!newCard && selected && <CheckIcon />}
        </StyledAddressCardHeader>

        {texts.map(
          (text, ind) =>
            ind !== 2 && (
              <Typography
                variant="h3"
                fontSize="1.5rem"
                fontWeight="bold"
                gutterBottom
                key={`address-${ind}-${text}`}
              >
                {text}
              </Typography>
            )
        )}

        {!newCard && <StyledButton onClick={handleClick}>Edit</StyledButton>}
      </div>
    </StyledAddressCard>
  );
};

export default AddressCard;
