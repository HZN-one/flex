/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom";
import { FMNoData } from "@Molecules";
import { render } from "@testing-library/react";

describe("FMNoData", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMNoData testID="no-data-test">
        Don’t worry! all order has completely assigned..
        <br />
        Now you don’t have any unassigned order from customer.
      </FMNoData>
    );
    expect(container).toMatchSnapshot();
  });
});
