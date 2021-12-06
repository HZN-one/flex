/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FAPagination } from "Components";

import { fireEvent, render } from "@testing-library/react";

describe("FAPagination", () => {
  it("should match snapshot", () => {
    const { container } = render(<FAPagination testID="pagination-example" />);
    expect(container).toMatchSnapshot();
  });
});
