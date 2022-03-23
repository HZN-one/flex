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
        value={"Tue Mar 22 2022 18:18:55 GMT+0700 (Western Indonesia Time)"}
        onChange={value => console.log(value)}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
