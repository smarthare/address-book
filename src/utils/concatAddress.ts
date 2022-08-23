import { Address } from "types/address";

const concatAddress = (addr: Address | undefined) => {
  if (addr) {
    const buffered = addr.formatted_address.reduce(
      (prev, cur) => (!!cur ? (!!prev ? `${prev}, ${cur}` : cur) : prev),
      ""
    );
  
    return `${buffered}, ${addr.country}`;
  } else {
    return "";
  }
};

export default concatAddress;
