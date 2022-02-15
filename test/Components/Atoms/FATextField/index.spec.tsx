/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FATextField } from "@Atoms";

import { render } from "@testing-library/react";

describe("FATextField", () => {
  it("should match snapshot", () => {
    const { container } = render(<FATextField testID="input-example" />);
    expect(container).toMatchSnapshot();
  });
});
