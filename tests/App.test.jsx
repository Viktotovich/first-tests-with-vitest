/*you don't need to import these btw, they're global.
The only reason I've kept the import is as a reminder
of available test-function */
import { describe, it, expect } from "vitest";
import App from "../src/App";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});

//barebones test to make sure everything is fine and dandy
