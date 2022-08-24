import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders welcome typography", () => {
  render(<App />);
  expect(screen.getByText('Welcome back to your address book.')).toBeInTheDocument()
});
