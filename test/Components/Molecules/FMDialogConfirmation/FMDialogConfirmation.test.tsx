/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FMDialogConfirmation } from "@Molecules";

const dialogData = {
  dialogProps: {
    open: true,
  },
  children: "Children",
};

describe("FMDialogConfirmation", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMDialogConfirmation
        dialogProps={dialogData.dialogProps}
        testID="dialog-example"
        icon="warning"
        title="Test"
        description="Test"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
