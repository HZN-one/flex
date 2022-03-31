/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FODialogWithAlert } from "@Organisms";

describe("FODialogWithAlert", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FODialogWithAlert
        dialogProps={{
          open: true,
        }}
        icon="error"
        onCloseIcon={() => {}}
        testID="dialog-alert-example"
        title="title"
      >
        children
      </FODialogWithAlert>
    );
    expect(container).toMatchSnapshot();
  });
});
