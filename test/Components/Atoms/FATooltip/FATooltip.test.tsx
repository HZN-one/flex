/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { FATooltip } from "@Components";

import { fireEvent, render } from "@testing-library/react";

describe("FATooltip", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FATooltip title="test" testID="tooltip-example">
        <button>test</button>
      </FATooltip>
    );
    expect(container).toMatchSnapshot();
  });
});
