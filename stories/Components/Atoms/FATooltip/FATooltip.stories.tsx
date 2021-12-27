import React from "react";
import { FATooltip } from "@Atoms/FATooltip";
import { IFATooltip } from "@Atoms/FATooltip/FATooltip.interface";

const story = {
  title: "Atom/Tooltip",
  component: FATooltip,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;
export const Default = (props: IFATooltip) => (
  <div style={{ width: "10%" }}>
    <FATooltip {...props} title="test">
      <button>test</button>
    </FATooltip>
  </div>
);

export const WithArrow = (props: IFATooltip) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <FATooltip
      {...props}
      title="top"
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      title="top"
      placement="top"
    >
      <button>test</button>
    </FATooltip>

    <FATooltip
      {...props}
      title="right"
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      title="right"
      placement="right"
    >
      <button>test</button>
    </FATooltip>

    <FATooltip
      {...props}
      title="bottom"
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      title="bottom"
      placement="bottom"
    >
      <button>test</button>
    </FATooltip>

    <FATooltip
      {...props}
      title="left"
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      title="left"
      placement="left"
    >
      <button>test</button>
    </FATooltip>
  </div>
);
