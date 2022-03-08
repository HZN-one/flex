/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMInputAvatar } from "@Molecules";

import { render } from "@testing-library/react";

describe("FMCard", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMInputAvatar
        testID="input-avatar-test"
        infoText="minimum image size 100 x 100 (max. 200 Kb). extention file must be in .PNG"
        buttonLabel="Upload Company Logo"
        acceptInput="image/*"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
