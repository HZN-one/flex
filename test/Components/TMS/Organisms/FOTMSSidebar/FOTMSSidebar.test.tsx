/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FOTMSSidebar } from "Components/TMS/Organisms";

import { render } from "@testing-library/react";

describe("FOTMSSidebar", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOTMSSidebar
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
        open={true}
        testID="sidebar-dashboard"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
