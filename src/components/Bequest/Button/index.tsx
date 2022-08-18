import { BequestButtonProps } from "types/props";

import { StyledButton } from "./style";

const BequestButton = (props: BequestButtonProps) => {
  const { children, handleOnClick, ...rest } = props;

  return (
    <StyledButton onClick={handleOnClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default BequestButton;
