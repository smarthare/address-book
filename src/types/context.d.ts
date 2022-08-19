import { Address } from "types/address";

export interface IAddressContext {
  loading: boolean | undefined;
  addr: number | undefined;
  addrs: Array<Address> | undefined;
  candiAddrs: Array<Address> | undefined;
  findAddress: Function;
  setAddress: Function;
}
