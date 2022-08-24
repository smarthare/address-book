import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import AddressCard from "..";

afterEach(() => {
  cleanup();
});

test("Should render AddressCard component", () => {
  render(
    <AddressCard
      addressId={""}
      texts={["test1", "skip", "test2"]}
      selected={true}
      handleClick={() => {}}
    />
  );

  const cardElement = screen.getByTestId("cardAddress");

  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveClass("MuiGrid-root");
  expect(cardElement.querySelectorAll("h3").length).toEqual(2);
  expect(screen.getByTestId("cardBtn")).toBeInTheDocument();
});

test("AddressCard matches snapshot", () => {
  const component = render(
    <AddressCard
      addressId={"test-address-id"}
      texts={["test1", "test2", "test3"]}
      selected={true}
      handleClick={() => {}}
    />
  );

  expect(component).toMatchSnapshot();
});
