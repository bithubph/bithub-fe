import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./index";

it("renders welcome message", () => {
  const { getByText } = render(<App/>);
  expect(getByText("Welcome to BitHub")).toBeInTheDocument();
});
