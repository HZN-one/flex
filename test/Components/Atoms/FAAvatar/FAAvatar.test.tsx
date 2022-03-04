/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FAAvatar } from "@Atoms";

describe("FAAvatar", () => {
  it("should match snapshot", () => {
    const { container } = render(<FAAvatar testID="avatar-example" />);
    expect(container).toMatchSnapshot();
  });
});
