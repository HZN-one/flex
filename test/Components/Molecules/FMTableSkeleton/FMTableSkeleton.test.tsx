/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMTableSkeleton } from "@Molecules";

import { render } from "@testing-library/react";

const table = document.createElement("table");

describe("FMTableSkeleton", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMTableSkeleton columns={5} rows={2} testID="table-skeleton-example" />,
      {
        container: document.body.appendChild(table),
      }
    );
    expect(container).toMatchSnapshot();
  });
});
