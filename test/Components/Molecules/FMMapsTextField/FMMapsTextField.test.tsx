/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FMMapsTextField } from "@Molecules";

describe("FMMapsTextField", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMMapsTextField
        testID="maps-textfield-test"
        label="Label test"
        buttonLabel="Label Test"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
