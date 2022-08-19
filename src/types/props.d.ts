import { InputHTMLAttributes } from "react";
import { Address } from "types/address";

export interface DialogBaseProps {
  title: string;
  open: boolean;
  handleClose: Function;
  handleOkAction: VoidFunction;
  handleCancelAction: VoidFunction;
  children?: React.ReactNode;
}

export interface DialogEnhanceProps {
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
  onClick?: VoidFunction;
  noWidth?: boolean;
  children: React.ReactNode;
}

export interface BequestInputProps {
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  gutterTop?: boolean;
  disabled?: boolean;
  handleChange?: Function<React.ChangeEvent<HTMLInputElement>>;
}

export interface BequestSelectProps {
  placeholder?: string;
  options?: Array<string>;
  disabled?: boolean;
  value?: string;
  handleChange?: Function<React.ChangeEvent<HTMLSelectElement>>;
}