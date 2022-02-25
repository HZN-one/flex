/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FLSettingsNavbarLayout } from "@Components/Layout";

import { render } from "@testing-library/react";

describe("FLSettingsNavbarLayout", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FLSettingsNavbarLayout
        sections={[]}
        testID="header-settings"
        headbarPosition="absolute"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
