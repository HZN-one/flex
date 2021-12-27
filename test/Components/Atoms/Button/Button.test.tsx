/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FAButton } from "@Atoms";

import { fireEvent, render } from "@testing-library/react";

describe("FAButton", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FAButton testID="button-example">Test</FAButton>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with children prop", () => {
    const { getByText } = render(
      <FAButton testID="button-example">hey</FAButton>
    );

    expect(getByText("hey")).toBeTruthy();
  });

  it("should increment number on click", () => {
    let number = 1;
    const { getByTestId } = render(
      <FAButton
        testID="button-example"
        onClick={() => {
          number += 1;
        }}
      >
        FAButton
      </FAButton>
    );

    fireEvent.click(getByTestId("button-example"), new MouseEvent("click"));

    expect(number).toBe(2);
  });
});
