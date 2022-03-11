/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FOCardWithImage } from "@Organisms";
import { DUMMY_IMAGE_URL } from "@Definitions/constants";

describe("FOCardWithImage", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOCardWithImage
        header={{
          title: "Card Image Title",
          subheader: "Card Image Subheader",
        }}
        testID="card-image-example"
        image={<img src={DUMMY_IMAGE_URL} />}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
