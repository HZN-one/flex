/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FMSearch } from "@Components";

import { render } from "@testing-library/react";

describe("FMSearch", () => {
  it("should match snapshot", () => {
    const { container } = render(<FMSearch testID="search-example" />);
    expect(container).toMatchSnapshot();
  });
});
