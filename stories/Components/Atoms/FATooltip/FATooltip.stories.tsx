import React from "react";
import { FATooltip } from "@Atoms/FATooltip";
import { IFATooltipProps } from "@Atoms/FATooltip/FATooltip.interface";

const story = {
  title: "Atom/Tooltip",
  component: FATooltip,
};

export default story;
export const Default = (props: IFATooltipProps) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <FATooltip {...props} title="test">
      <span style={{ border: "1px solid grey", padding: "5px" }}>
        Default Tooltip
      </span>
    </FATooltip>
  </div>
);

export const WithArrow = (props: IFATooltipProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px 0px",
    }}
  >
    <div style={{ padding: "20px 0" }}>
      <FATooltip
        {...props}
        title="My Tooltip"
        arrow
        placement="top"
        open={true}
      >
        <span style={{ border: "1px solid grey", padding: "5px" }}>
          Top Arrow Tooltip
        </span>
      </FATooltip>
    </div>
    <div style={{ padding: "20px 0" }}>
      <FATooltip
        {...props}
        title="My Tooltip"
        arrow
        placement="right"
        open={true}
      >
        <span style={{ border: "1px solid grey", padding: "5px" }}>
          Right Arrow Tooltip
        </span>
      </FATooltip>
    </div>
    <div style={{ padding: "20px 0" }}>
      <FATooltip
        {...props}
        title="My Tooltip"
        arrow
        placement="bottom"
        open={true}
      >
        <span style={{ border: "1px solid grey", padding: "5px" }}>
          Bottom Arrow Tooltip
        </span>
      </FATooltip>
    </div>
    <div style={{ padding: "20px 0" }}>
      <FATooltip
        {...props}
        title="My Tooltip"
        arrow
        placement="left"
        open={true}
      >
        <span style={{ border: "1px solid grey", padding: "5px" }}>
          Left Arrow Tooltip
        </span>
      </FATooltip>
    </div>
  </div>
);
