import DialogBase from "../DialogBase";
import { BequestInput, BequestAutoSelect } from "components/Bequest";

import countries from "constants/countires";
import { DialogEnhanceProps } from "types/props";
import { StyledButton } from "./style";

const inputs = [
  { type: "input", placeholder: "Line 1", required: true },
  { type: "input", placeholder: "Line 2", required: false },
  { type: "input", placeholder: "Line 3", required: false },
  { type: "input", placeholder: "Town", required: true },
  { type: "input", placeholder: "Country", required: false },
  { type: "select", placeholder: "Select Country", required: true },
  { type: "input", placeholder: "Postcode", required: true },
];

const ManualAddDialog = (props: DialogEnhanceProps) => {
  const { handleOpenNext, ...rest } = props;

  return (
    <DialogBase
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
      {...rest}
    >
      <StyledButton onClick={handleOpenNext}>
        Lookup address by postcode
      </StyledButton>

      {inputs.map((item, ind) => (
        <div key={`input-${ind}`}>
          {item.type === "input" ? (
            <BequestInput gutterTop {...item} />
          ) : (
            <BequestAutoSelect
              placeholder={item.placeholder}
              options={countries}
            />
          )}
          <br />
        </div>
      ))}
    </DialogBase>
  );
};

export default ManualAddDialog;
