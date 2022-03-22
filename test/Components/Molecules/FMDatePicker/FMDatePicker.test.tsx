/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FMDatePicker } from "@Molecules";

describe("FMDatePicker", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMDatePicker
        testID="date-picker-test"
        datePickerType="date"
        value={new Date()}
        onChange={value => console.log(value)}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
