/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { FOSideBar } from "@Organisms";

describe("FOSideBar", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOSideBar
        testID="sidebar-example"
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
      />
    );
    expect(container).toMatchSnapshot();
  });
});
