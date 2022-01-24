/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FOCardWithTextField } from "@Organisms";

import { render } from "@testing-library/react";

describe("FOCardWithTextField", () => {
  it("should match snapshot", () => {
    const { container } = render(<FOCardWithTextField testID="card-example" />);
    expect(container).toMatchSnapshot();
  });
});
