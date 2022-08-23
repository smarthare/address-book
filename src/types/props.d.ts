import { InputHTMLAttributes } from "react";
import { Address } from "types/address";

export interface DialogBaseProps {
  title?: string;
  open: boolean;
  handleClose: Function;
  handleOkAction: VoidFunction;
  handleCancelAction: Function;
  children?: React.ReactNode;
}

export interface DialogEnhancedProps {
  open: boolean;
  title?: string;
  handleClose: Function;
  handleOpenNext: VoidFunction;
}

export interface AddressCardProps {
  addressId?: string;
  texts: Array<string>;
  selected?: boolean;
  newCard?: boolean;
  handleClick?: Function<MouseEventHandler<HTMLButtonElement>>;
}

export interface BequestButtonProps {
  secondary?: boolean;
  onClick?: Function<MouseEventHandler<HTMLButtonElement> | boolean>;
  noWidth?: boolean;
  children: React.ReactNode;
}

export interface BequestInputProps {
  value?: string | number | undefined;
  placeholder?: string;
  required?: boolean;
  gutterTop?: boolean;
  disabled?: boolean;
  formattedAddress?: Function;
  handleChange?: Function<React.ChangeEvent<HTMLInputElement>>;
}

export interface SelectProps {
  placeholder?: string;
  options?: Array<string>;
  disabled?: boolean;
}

export interface BequestSelectProps extends SelectProps {
  defaultValue?: number;
  handleChange: Function<React.ChangeEvent<HTMLSelectElement>>;
} 

export interface BequestAutoSelectProps extends SelectProps {
  defaultValue: string | null;
  handleChange: Function;
}