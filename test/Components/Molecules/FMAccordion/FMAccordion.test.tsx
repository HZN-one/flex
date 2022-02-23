/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FMAccordion } from "@Molecules";

import { render } from "@testing-library/react";

describe("FMAccordion", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMAccordion testID="accordion-example">test</FMAccordion>
    );
    expect(container).toMatchSnapshot();
  });
});
