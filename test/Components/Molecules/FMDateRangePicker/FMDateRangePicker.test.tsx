/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FMDateRangePicker } from "@Molecules";

describe("FMCard", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMDateRangePicker
        testID="date-range-picker-test"
        label="Pick Date Range"
        value={[
          new Date("Wed Mar 16 2022 00:00:00 GMT+0700"),
          new Date("Wed Mar 16 2022 00:00:00 GMT+0700"),
        ]}
        setValue={value => {
          console.log(value);
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
