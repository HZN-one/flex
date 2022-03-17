/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FLAuthentication } from "@Components/Layout";

describe("FLAuthentication", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FLAuthentication
        testID="layout-authentication-test"
        isCenter
        header={{
          buttonLogin: {
            children: "Login",
            href: "/login",
          },
          buttonRegister: {
            children: "Register",
            href: "/register",
          },
          linkComponent: "a",
          logo: true,
        }}
        childrenGridWidth={6}
      >
        Children component
      </FLAuthentication>
    );
    expect(container).toMatchSnapshot();
  });
});
