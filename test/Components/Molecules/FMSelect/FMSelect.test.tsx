/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FMSelect } from "@Components";

import { render } from "@testing-library/react";

describe("FMSelect", () => {
  it("should match snapshot", () => {
    const { container } = render(<FMSelect testID="select-example" />);
    expect(container).toMatchSnapshot();
  });
});
