import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import AddressBook from "../../AddressBook";

afterEach(() => {
  cleanup();
});

test("Should render AddressBook component", () => {
  render(<AddressBook />);

  const dialogElement = screen.getByTestId("addressBookPage");

  expect(dialogElement).toBeInTheDocument();
  expect(screen.getByTestId("pageTitle")).toHaveTextContent("Address Book");
  expect(screen.getByTestId("pageInput")).toHaveValue("");
  expect(screen.getByTestId("pageBtn")).toHaveTextContent("Select Address");
});

test("AddressBook matches snapshot", () => {
  const component = render(<AddressBook />);

  expect(component).toMatchSnapshot();
});
