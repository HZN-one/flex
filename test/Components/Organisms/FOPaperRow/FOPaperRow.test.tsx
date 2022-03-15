/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FOPaperRow } from "@Organisms";

describe("FOPaperRow", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOPaperRow
        testID="paper-row-example"
        items={[
          {
            title: "Title",
            children: "Description",
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
