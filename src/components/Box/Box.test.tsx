import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Box from "./Box";
import React from "react";

describe("<Box />", () => {
  test("it should mount", () => {
    render(<Box text="Raja Osama" />);

    const box = screen.getByTestId("Box");

    expect(box).toBeInTheDocument();
  });
});
