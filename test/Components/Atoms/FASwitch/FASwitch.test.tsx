/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FASwitch } from "@Atoms";

import { render } from "@testing-library/react";

describe("FASwitch", () => {
  it("should match snapshot", () => {
    const { container } = render(<FASwitch testID="switch-example" />);
    expect(container).toMatchSnapshot();
  });
});
