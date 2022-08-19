import { InputHTMLAttributes } from "react";

export interface DialogBaseProps {
  title: string;
  open: boolean;
  handleClose: VoidFunction;
  handleOkAction: VoidFunction;
  handleCancelAction: VoidFunction;
  children?: React.ReactNode;
}

export interface DialogEnhanceProps {
  open: boolean;
  handleClose: VoidFunction;
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
  handleOnClick?: VoidFunction;
  noWidth?: boolean;
  children: React.ReactNode;
}

export interface BequestInputProps {
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  gutterTop?: boolean;
  disabled?: boolean;
  handleChange?: VoidFunction;
}
