import { Address } from "types/address";
import { DialogState } from "types/dialogs";

export interface IAddressContext {
  loading: boolean | undefined;
  currentId: string | undefined;
  editId: string | undefined;
  addDialogState: DialogState;
  addrs: Array<Address>;
  candiAddrs: Array<Address>;
  findAddress: Function;
  setAddress: Function;
  updateAddress: Function;
  setCurrentId: Function;
  setEditId: Function;
  setAddDialogState: Function;
  getFullAddress: Function;
}
