import { Grid } from "@mui/material";

import DialogBase from "../DialogBase";
import { BequestInput, BequestSelect } from "components/Bequest";

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
  const { open, title, handleClose, handleOpenNext } = props;

  return (
    <DialogBase
      open={open}
      handleClose={handleClose}
      title={title}
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
    >
      <Grid container display="flex" justifyContent="start">
        <StyledButton onClick={handleOpenNext}>
          Lookup address by postcode
        </StyledButton>
      </Grid>

      {inputs.map((input) => (
        <>
          {input.type === "input" ? (
            <BequestInput gutterTop {...input} />
          ) : (
            <BequestSelect />
          )}
          <br />
        </>
      ))}
    </DialogBase>
  );
};

export default ManualAddDialog;
