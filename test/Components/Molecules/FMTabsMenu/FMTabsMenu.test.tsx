/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom";
import { FMTabsMenu } from "@Molecules";
import { render } from "@testing-library/react";

describe("FMStepper", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMTabsMenu
        testID="tabs-example"
        tabs={[
          { label: "Individual", iconName: "person_outline" },
          { label: "Company", iconName: "home_work" },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
