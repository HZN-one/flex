/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FOTMSRegisterNavbar } from "Components/TMS/Organisms/FOTMSRegisterNavbar";

import { render } from "@testing-library/react";

describe("FOTMSRegisterNavbar", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOTMSRegisterNavbar testID="header-register" />
    );
    expect(container).toMatchSnapshot();
  });
});
