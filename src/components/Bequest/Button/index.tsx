import { BequestButtonProps } from "types/props";
import { StyledButton } from "./style";

const BequestButton = (props: BequestButtonProps) => {
  const { children, ...rest } = props;

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default BequestButton;
