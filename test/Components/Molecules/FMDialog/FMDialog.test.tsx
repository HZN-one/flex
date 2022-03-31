/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FMDialog } from "@Molecules";

const dialogData = {
  dialogProps: {
    open: true,
  },
  children: "Children",
};

describe("FMDialog", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FMDialog dialogProps={dialogData.dialogProps} testID="dialog-example">
        {dialogData.children}
      </FMDialog>
    );
    expect(container).toMatchSnapshot();
  });
});
