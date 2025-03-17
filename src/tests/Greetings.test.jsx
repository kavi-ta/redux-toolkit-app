import React from "react";
import { render, screen } from "@testing-library/react";
import { Greetings } from "../components/Greetings";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("renders a default greeting", () => {
    render(<Greetings />);
    expect(screen.getByText("Hello, World")).toBeInTheDocument();
  });

  it("renders greeting with a name", () => {
    render(<Greetings name={"Henry"} />);
    expect(screen.getByText("Hello, Henry")).toBeInTheDocument();
  });
});
