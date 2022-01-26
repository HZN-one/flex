/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FOCardWithImage } from "@Organisms";

import { render } from "@testing-library/react";

describe("FOCardWithImage", () => {
  it("should match snapshot", () => {
    const { container } = render(<FOCardWithImage testID="card-example" />);
    expect(container).toMatchSnapshot();
  });
});
