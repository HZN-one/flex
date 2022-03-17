/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMBackdropImage } from "@Molecules";

import { render } from "@testing-library/react";

import { DUMMY_COMPANY_IMAGE_URL } from "@Definitions/constants";

describe("FMBackdropImage", () => {
  let open = true;
  const handleClose = () => {
    open = false;
  };
  it("should match snapshot", () => {
    const { container } = render(
      <FMBackdropImage
        testID="backdrop-image-test"
        handleClose={handleClose}
        open={open}
      >
        <img src={DUMMY_COMPANY_IMAGE_URL} />
      </FMBackdropImage>
    );
    expect(container).toMatchSnapshot();
  });
});
