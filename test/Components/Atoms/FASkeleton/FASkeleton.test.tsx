/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FASkeleton } from "@Atoms";

import { render } from "@testing-library/react";

describe("FASkeleton", () => {
  it("should match snapshot", () => {
    const { container } = render(<FASkeleton testID="skeleton-example" />);
    expect(container).toMatchSnapshot();
  });
});
