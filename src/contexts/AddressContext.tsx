import { createContext, useEffect, useState, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

import { getAddress } from "apis";
// import compareObjects from "utils/compareObjects";
import { IAddressContext } from "types/context";
import { Address } from "types/address";
import { DialogState } from "types/dialogs";

const AddressContext = createContext({
  loading: undefined,
  currentId: undefined,
  candiId: undefined,
  editId: undefined,
  addDialogState: DialogState.NEW,
  addrs: [],
  candiAddrs: [],
  findAddress: () => {},
  setAddress: () => {},
  updateAddress: () => {},
  setCurrentId: () => {},
  setEditId: () => {},
  setAddDialogState: () => {},
  getFullAddress: () => {},
} as IAddressContext);

function AddressProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>();
  const [addrs, setAddrs] = useState<Array<Address>>([]);
  const [candiAddrs, setCandiAddrs] = useState<Array<Address>>([]);
  const [currentId, setCurrentId] = useState<string>();
  const [editId, setEditId] = useState<string>();
  const [addDialogState, setAddDialogState] = useState<DialogState>(
    DialogState.NEW
  );

  useEffect(() => {
    const _addrs = localStorage.getItem("addresses");
    const _currentId = localStorage.getItem("currentId");
    _addrs && setAddrs(JSON.parse(_addrs));
    _currentId && setCurrentId(_currentId);
  }, []);

  useEffect(() => {
    addrs.length > 0 &&
      localStorage.setItem("addresses", JSON.stringify(addrs));
  }, [addrs]);

  useEffect(() => {
    currentId && localStorage.setItem("currentId", `${currentId}`);
  }, [currentId]);

  const findAddress = async (postcode: string) => {
    setLoading(true);
    const receipt = await getAddress(postcode);
    receipt && setCandiAddrs(receipt);
    setLoading(false);

    return receipt;
  };

  const setAddress = (_addr: Address, postcode: string) => {
    // let id = null;

    // addrs.forEach((addr) => {
    //   if (compareObjects(addr, _addr)) {
    //     return (id = addr.id);
    //   }
    // });

    // if (!id) {
    const id = uuidv4();
    setCurrentId(id);
    setAddrs((prev) => [...prev, { ..._addr, id, postcode }]);
    // } else {
    //   setCurrentId(id);
    // }
  };

  const updateAddress = (id: string, _addr: Address, postcode: string) => {
    const _addrs = addrs.map((addr) =>
      addr.id !== id ? addr : { ..._addr, id, postcode }
    );
    setAddrs(_addrs);
  };

  const getFullAddress = (_id: string) => {
    return addrs.find((addr) => addr.id === _id);
  };

  return (
    <AddressContext.Provider
      value={{
        loading,
        currentId,
        editId,
        addDialogState,
        addrs,
        candiAddrs,
        findAddress,
        setAddress,
        updateAddress,
        setCurrentId,
        setEditId,
        setAddDialogState,
        getFullAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export { AddressProvider, AddressContext };
