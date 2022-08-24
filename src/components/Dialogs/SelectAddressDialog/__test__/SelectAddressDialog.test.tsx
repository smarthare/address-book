import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import SelectAddressDialog from "../../SelectAddressDialog";
import { AddressContext } from "contexts/AddressContext";
import { Address } from "types/address";
import { IAddressContext } from "types/context";

afterEach(() => {
  cleanup();
});

const mockContextValue = {
  currentId: "1",
  addrs: [
    {
      id: "0",
      formatted_address: ["test1", "test2"],
    } as Address,
    {
      id: "1",
      formatted_address: ["test3", "test4"],
    } as Address,
  ],
} as IAddressContext;

test("Should render address cards", () => {
  render(
    <AddressContext.Provider value={mockContextValue}>
      <SelectAddressDialog
        open={true}
        handleClose={() => {}}
        handleOpenNext={() => {}}
      />
    </AddressContext.Provider>
  );

  const dialogElement = screen.getByRole("dialog");

  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveClass("MuiPaper-root");
  expect(screen.getByTestId("CheckCircleRoundedIcon")).toBeInTheDocument();
  expect(screen.getByTestId("dialogAddBtn")).toHaveTextContent(
    "Add new address"
  );
});

test("SelectAddressDialog matches snapshot", () => {
  const component = render(
    <AddressContext.Provider value={mockContextValue}>
      <SelectAddressDialog
        open={true}
        handleClose={() => {}}
        handleOpenNext={() => {}}
      />
    </AddressContext.Provider>
  );

  expect(component).toMatchSnapshot();
});
