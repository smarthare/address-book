import { InputHTMLAttributes } from "react";
import { Address } from "types/address";

export interface DialogBaseProps {
  title: string;
  open: boolean;
  handleClose: Function;
  handleOkAction: VoidFunction;
  handleCancelAction: Function;
  children?: React.ReactNode;
}

export interface DialogEnhancedProps {
  open: boolean;
  handleClose: Function;
  handleOpenNext: VoidFunction;
  title: string;
}

export interface AddressCardProps {
  texts: Array<string>;
  selected?: boolean;
  newCard?: boolean;
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

export interface BequestSelectProps {
  placeholder?: string;
  options?: Array<string>;
  disabled?: boolean;
  value?: string | number;
  handleChange?: Function<React.ChangeEvent<HTMLSelectElement>>;
}