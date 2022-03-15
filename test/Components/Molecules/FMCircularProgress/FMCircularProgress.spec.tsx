/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FMCircularProgress } from "@Molecules";

import { render } from "@testing-library/react";

describe("FMCircularProgress", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMCircularProgress testID="circular-progress-test" />
    );
    expect(container).toMatchSnapshot();
  });
});
