import { Typography } from "@mui/material";

import { CheckIcon, HomeIcon } from "components/Icons";

import { AddressCardProps } from "types/props";
import { StyledAddressCard, StyledAddressCardHeader } from "./style";

const AddressCard = (props: AddressCardProps) => {
  const { texts, selected, newCard } = props;

  return (
    <StyledAddressCard item sm={6} md={4} selected={selected}>
      <StyledAddressCardHeader>
        <HomeIcon />
        {!newCard && selected && <CheckIcon />}
      </StyledAddressCardHeader>

      {texts.map((text, ind) => (
        <Typography
          variant="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          gutterBottom
          key={`address-${ind}-${text}`}
        >
          {text}
        </Typography>
      ))}
    </StyledAddressCard>
  );
};

export default AddressCard;
