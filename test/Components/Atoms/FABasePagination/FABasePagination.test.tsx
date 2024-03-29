/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FAPagination } from "@Atoms";

import { render } from "@testing-library/react";

describe("FAPagination", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FAPagination size="small" count={10} testID="pagination-example" />
    );
    expect(container).toMatchSnapshot();
  });
});
