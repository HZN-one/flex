/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FOTMSDashboardNavbar } from "Components/TMS/Organisms/FOTMSDashboardNavbar";

import { render } from "@testing-library/react";

describe("FOTMSDashboardNavbar", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOTMSDashboardNavbar
        content={[
          {
            title: "Transaction",
            path: "/transaction",
            icon: "trending_up",
            role: "all",
          },
          {
            title: "Internal Management",
            path: "/transaction",
            icon: "people_alt",
            role: "all",
            children: [
              {
                title: "Customer",
                path: "/dashboard/customers",
              },
              {
                title: "Driver",
                path: "/dashboard/customers/1",
              },
            ],
          },
        ]}
        popUp={<p>pop</p>}
        testID="header-example"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
