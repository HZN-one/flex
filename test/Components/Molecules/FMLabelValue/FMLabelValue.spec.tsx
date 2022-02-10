/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FMLabelValue } from "@Molecules";

import { render } from "@testing-library/react";

describe("FMLabelValue", () => {
  it("should match snapshot", () => {
    const { container } = render(<FMLabelValue label="Title" value="value" />);
    expect(container).toMatchSnapshot();
  });
});
