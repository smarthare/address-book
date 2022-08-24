import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import ManualAddDialog from "../../ManualAddDialog";

afterEach(() => {
  cleanup();
});

test("Should render ManualAddDialog component", () => {
  render(
    <ManualAddDialog
      open={true}
      handleClose={() => {}}
      handleOpenNext={() => {}}
    />
  );

  const dialogElement = screen.getByRole("dialog");

  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveClass("MuiPaper-root");
  expect(screen.getByTestId("dialogAutoBtn")).toHaveTextContent(
    "Lookup address by postcode"
  );
  expect(screen.getByTestId("dialogContent").childElementCount).toEqual(
    6 + 4 + 10 + 1 + 1
  );
});

test("ManualAddDialog matches snapshot", () => {
  const component = render(
    <ManualAddDialog
      open={true}
      handleClose={() => {}}
      handleOpenNext={() => {}}
    />
  );

  expect(component).toMatchSnapshot();
});
