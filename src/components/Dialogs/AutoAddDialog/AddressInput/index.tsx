import { useContext, useEffect, useState } from "react";

import { AddressContext } from "contexts/AddressContext";
import concatAddress from "utils/concatAddress";
import { BequestInputProps } from "types/props";
import { BequestInput } from "components/Bequest";

const AddressInput = (props: BequestInputProps) => {
  const { value, ...rest } = props;

  const { candiAddrs } = useContext(AddressContext);

  const [dispValue, setDispValue] = useState<string | number>();

  useEffect(() => {
    setDispValue(
      candiAddrs && typeof value === "number"
        ? concatAddress(candiAddrs[value - 1])
        : value
    );
  }, [candiAddrs, value]);

  return (
    <BequestInput value={dispValue} disabled={value !== dispValue} {...rest} />
  );
};

export default AddressInput;
