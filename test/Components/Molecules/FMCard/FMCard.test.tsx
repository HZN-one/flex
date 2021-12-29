/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMCard } from "@Molecules";

import { render } from "@testing-library/react";

describe("FMCard", () => {
  it("should match snapshot", () => {
    const { container } = render(<FMCard testID="card-example" />);
    expect(container).toMatchSnapshot();
  });
});
