/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom";
import { FAButton } from "@Atoms";
import { FMStepper } from "@Molecules";
import { render } from "@testing-library/react";

describe("FMStepper", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMStepper
        testID="stepper-example"
        data={[
          {
            children: "Description 1",
            title: "Title 1",
          },
          {
            children: "Description 2",
            title: "Title 2",
          },
          {
            children: "Description 3",
            title: "Title 3",
          },
          {
            children: "Description 4",
            title: "Title 4",
          },
        ]}
        buttonSubmit={
          <FAButton testID="button-test" size="small">
            Submit
          </FAButton>
        }
      />
    );
    expect(container).toMatchSnapshot();
  });
});
