import { createContext, useEffect, useState, ReactNode } from "react";

import { getAddress } from "apis";
import compareObjects from "utils/compareObjects";
import { IAddressContext } from "types/context";
import { Address } from "types/address";

const AddressContext = createContext({
  loading: undefined,
  addr: undefined,
  addrs: undefined,
  candiAddrs: undefined,
  findAddress: () => {},
  setAddress: () => {},
} as IAddressContext);

function AddressProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>();
  const [addrs, setAddrs] = useState<Array<Address>>([]);
  const [candiAddrs, setCandiAddrs] = useState<Array<Address>>([]);
  const [addr, setAddr] = useState<number>();

  useEffect(() => {
    const _addrs = localStorage.getItem("addresses");
    _addrs && setAddrs(JSON.parse(_addrs));
  }, []);

  const findAddress = async (postcode: string) => {
    setLoading(true);

    const receipt = await getAddress(postcode);
    receipt && setCandiAddrs(receipt);

    setLoading(false);
  };

  const setAddress = (_addr: Address) => {
    addrs.forEach((addr, ind) => {
      if (compareObjects(addr, _addr)) {
        return setAddr(ind);
      }
    });

    setAddrs((prev) => [...prev, _addr]);
    localStorage.setItem("addresses", JSON.stringify(addrs));
  };

  return (
    <AddressContext.Provider
      value={{
        loading,
        addr,
        addrs,
        candiAddrs,
        findAddress,
        setAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export { AddressProvider, AddressContext };
