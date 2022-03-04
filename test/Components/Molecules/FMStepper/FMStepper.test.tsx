/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom";
import { FMStepper } from "@Molecules";
import { render } from "@testing-library/react";

describe("FMStepper", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMStepper
        testID="stepper-example"
        stepperColumn={8}
        data={[
          {
            title: "Title 1",
            children: "Description 1",
            buttonLabel: "Next",
            onSubmitBack: () => {
              console.log("onSubmitBack");
            },
            onSubmitNext: () => {
              console.log("onSubmitNext");
            },
          },
          {
            title: "Title 2",
            children: "Description 2",
            buttonLabel: "Next",
            onSubmitBack: () => {
              console.log("onSubmitBack");
            },
            onSubmitNext: () => {
              console.log("onSubmitNext");
            },
          },
          {
            title: "Title 3",
            children: "Description 3",
            buttonLabel: "Next",
            onSubmitBack: () => {
              console.log("onSubmitBack");
            },
            onSubmitNext: () => {
              console.log("onSubmitNext");
            },
          },
          {
            title: "Title 4",
            children: "Description 4",
            buttonLabel: "Submit",
            onSubmitBack: () => {
              console.log("onSubmitBack");
            },
            onSubmitNext: () => {
              console.log("onSubmitNext");
            },
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
