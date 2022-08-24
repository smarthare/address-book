import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import ManualAddDialog from "../../ManualAddDialog";
import { AddressContext } from "contexts/AddressContext";
import { IAddressContext } from "types/context";
import { Address } from "types/address";

afterEach(() => {
  cleanup();
});

const mockContextValue = {
  editId: "1",
  addrs: [
    {
      id: "0",
      formatted_address: ["test1", "test2"],
    } as Address,
    {
      id: "1",
      line_1: "line1",
      town_or_city: "London",
      postcode: "postcode",
      country: "England",
      formatted_address: ["test3", "test4"],
    } as Address,
  ],
} as IAddressContext;

test("Should render ManualAddDialog component", () => {
  const mockOnClick = jest.fn();

  render(
    <AddressContext.Provider
      value={{ ...mockContextValue, updateAddress: mockOnClick }}
    >
      <ManualAddDialog
        open={true}
        handleClose={() => {}}
        handleOpenNext={() => {}}
      />
    </AddressContext.Provider>
  );

  const dialogElement = screen.getByRole("dialog");
  const inputs = screen.getByTestId("dialogContent").querySelectorAll("input");

  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveClass("MuiPaper-root");
  expect(inputs.length).toEqual(7);
  expect(inputs.item(0).value).toEqual("line1");
  expect(screen.getByTestId("dialogAutoBtn")).toHaveTextContent(
    "Lookup address by postcode"
  );

  fireEvent.click(screen.getByTestId("dialogOkBtn"));

  expect(mockOnClick.mock.calls.length).toEqual(1);
});

test("ManualAddDialog matches snapshot", () => {
  const component = render(
    <AddressContext.Provider value={mockContextValue}>
      <ManualAddDialog
        open={true}
        handleClose={() => {}}
        handleOpenNext={() => {}}
      />
    </AddressContext.Provider>
  );

  expect(component).toMatchSnapshot();
});
