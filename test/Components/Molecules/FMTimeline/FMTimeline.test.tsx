/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom";
import { FMTimeline } from "@Molecules";
import { render } from "@testing-library/react";

describe("FMTimeline", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMTimeline
        testID="timeline-example"
        data={[
          {
            color: "info",
            description: "Description 1",
            icon: "fiber_manual_record",
            title: "Title 1",
          },
          {
            color: "primary",
            description: "Description 2",
            icon: "location_on",
            title: "Title 2",
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
