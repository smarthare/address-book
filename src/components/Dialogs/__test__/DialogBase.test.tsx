import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import DialogBase from "../DialogBase";

afterEach(() => {
  cleanup();
});

test("Should render DialogBase component", () => {
  render(
    <DialogBase
      title="Test Title"
      open={true}
      handleClose={() => {}}
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
    >
      <h1 data-testid="testHeader">Test Header</h1>
    </DialogBase>
  );

  const dialogElement = screen.getByRole("dialog");

  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveClass("MuiPaper-root");
  expect(screen.getByTestId("dialogTitle")).toHaveTextContent("Test Title");
  expect(screen.getByTestId("testHeader")).toHaveTextContent("Test Header");
});

test("DialogBase matches snapshot", () => {
  const component = render(
    <DialogBase
      title="Test Title"
      open={true}
      handleClose={() => {}}
      handleOkAction={() => {}}
      handleCancelAction={() => {}}
    >
      <h1 data-testid="testHeader">Test Header</h1>
    </DialogBase>
  );

  expect(component).toMatchSnapshot();
});
