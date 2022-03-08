/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FOHeader } from "@Organisms";

describe("FOHeader", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOHeader
        testID="header-example"
        position="static"
        headerType="auth"
        buttonLogin={{
          children: "Login",
          href: "/login",
        }}
        buttonRegister={{
          children: "Register",
          href: "/register",
        }}
        linkComponent="a"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
