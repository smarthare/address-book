import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import AutoAddDialog from "../../AutoAddDialog";

afterEach(() => {
  cleanup();
});

test("Should render AutoAddDialog component", () => {
  render(
    <AutoAddDialog
      open={true}
      handleClose={() => {}}
      handleOpenNext={() => {}}
    />
  );

  const dialogElement = screen.getByRole("dialog");

  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveClass("MuiPaper-root");
  expect(screen.getByTestId("dialogManualBtn")).toHaveTextContent(
    "Enter address manually"
  );
  expect(screen.getByTestId("dialogActBtn")).toHaveTextContent("Add address");
  expect(screen.getByTestId("dialogInput")).toHaveValue("");
});

test("AutoAddDialog matches snapshot", () => {
  const component = render(
    <AutoAddDialog
      open={true}
      handleClose={() => {}}
      handleOpenNext={() => {}}
    />
  );

  expect(component).toMatchSnapshot();
});
