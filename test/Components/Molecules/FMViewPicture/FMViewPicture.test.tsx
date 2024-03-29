/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMViewPicture } from "@Molecules";

import { render } from "@testing-library/react";

import { DUMMY_COMPANY_IMAGE_URL } from "@Definitions/constants";

describe("FMViewPicture", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMViewPicture label="test" testID="view-picture-test">
        <img src={DUMMY_COMPANY_IMAGE_URL} alt="dummy" />
      </FMViewPicture>
    );
    expect(container).toMatchSnapshot();
  });
});
