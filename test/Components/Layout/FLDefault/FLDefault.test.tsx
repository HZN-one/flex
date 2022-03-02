/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FLDefault } from "@Components/Layout";

describe("FLDefault", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FLDefault
        testID="layout-default-test"
        header={{
          title: "Title",
          userAvatarSrc: "#",
          accountName: "Company Name",
        }}
        linkComponent="a"
        menu={[
          {
            title: "Dashboard",
            path: "/",
            icon: "dashboard",
          },
          {
            title: "Users",
            path: "/users",
            icon: "people",
            subMenu: [
              {
                title: "List",
                path: "/users/list",
              },
              {
                title: "Create",
                path: "/users/create",
              },
            ],
          },
        ]}
        footerMenu={[
          {
            title: "Settings",
            path: "/settings",
            icon: "settings",
          },
        ]}
        buttonLogout={{
          children: "Logout",
          onClick: () => {},
        }}
      >
        Children component
      </FLDefault>
    );
    expect(container).toMatchSnapshot();
  });
});
