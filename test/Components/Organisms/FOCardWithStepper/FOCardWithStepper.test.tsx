/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FOCardWithStepper } from "@Organisms";

const stepperData = [
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
];

describe("FOCardWithImage", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOCardWithStepper
        cardProps={{
          title: "Card Title",
          subtitle: "Card Subtilte",
        }}
        stepperProps={{ data: stepperData, stepperColumn: 8 }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
