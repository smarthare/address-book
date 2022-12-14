import { useContext } from "react";
import { Grid, Typography } from "@mui/material";

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
      item
      xs={12}
      sm={12}
      md={6}
      lg={4}
      selected={selected}
      onClick={handleClickSetWrapper}
      data-testid="cardAddress"
    >
      <Grid>
        <StyledAddressCardHeader>
          <HomeIcon />
          {!newCard && selected && <CheckIcon />}
        </StyledAddressCardHeader>

        {texts.map(
          (text, ind) =>
            ind !== 1 && (
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

        <Grid container flexDirection="row-reverse">
          {!newCard && <StyledButton onClick={handleClick} data-testid="cardBtn">Edit</StyledButton>}
        </Grid>
      </Grid>
    </StyledAddressCard>
  );
};

export default AddressCard;
