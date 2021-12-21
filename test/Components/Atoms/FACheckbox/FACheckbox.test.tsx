/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FACheckbox } from "@Components";

import { render } from "@testing-library/react";

describe("FACheckbox", () => {
  it("should match snapshot", () => {
    const { container } = render(<FACheckbox testID="checkbox-example" />);
    expect(container).toMatchSnapshot();
  });
});
