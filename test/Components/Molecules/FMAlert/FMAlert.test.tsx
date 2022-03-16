/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMAlert } from "@Molecules";

import { render } from "@testing-library/react";

describe("FMAlert", () => {
  it("should match snapshot", () => {
    const { container } = render(<FMAlert testID="alert-example" />);
    expect(container).toMatchSnapshot();
  });
});
