import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import SelectAddressDialog from "../../../dialogs/SelectAddressDialog";

afterEach(() => {
  cleanup();
});

test("Should render SelectAddressDialog component", () => {
  render(
    <SelectAddressDialog
      open={true}
      handleClose={() => {}}
      handleOpenNext={() => {}}
    />
  );

  const dialogElement = screen.getByRole("dialog");

  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveClass("MuiPaper-root");
  expect(screen.getByTestId("dialogAddBtn")).toHaveTextContent(
    "Add new address"
  );
  expect(screen.getByTestId("dialogCardWrapper").childElementCount).toEqual(1);
});

test("SelectAddressDialog matches snapshot", () => {
  const component = render(
    <SelectAddressDialog
      open={true}
      handleClose={() => {}}
      handleOpenNext={() => {}}
    />
  );

  expect(component).toMatchSnapshot();
});
