import {
  AddressWrapper,
  InputWrapper,
  StyledSelectButton,
  StyledInput,
  StyledSaveButton,
} from "./style";

type Props = {};

const Address = (props: Props) => {
  return (
    <AddressWrapper>
      <h3>Address:</h3>
      <InputWrapper>
        <StyledInput value="input" />
        <StyledSelectButton>Select Address</StyledSelectButton>
      </InputWrapper>
      <StyledSaveButton>Save Changes</StyledSaveButton>
    </AddressWrapper>
  );
};

export default Address;
