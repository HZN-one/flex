import React from "react";
import { ComponentStory } from "@storybook/react";
import { FATooltip } from "Components/Atoms/FATooltip";
import { IFATooltip } from "Components/Atoms/FATooltip/FATooltip.interface";

const story = {
  title: "Tooltip",
  component: FATooltip,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

const Template: ComponentStory<typeof FATooltip> = (props: IFATooltip) => (
  <FATooltip {...props} />
);

export const Default = (props: IFATooltip) => (
  <div style={{ width: "10%" }}>
    <FATooltip {...props}>
      <button>test</button>
    </FATooltip>
  </div>
);

export const WithArrow = (props: IFATooltip) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  >
    <FATooltip
      {...props}
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      placement="top"
        <button>test</button>
    </FATooltip>

    <FATooltip
      {...props}
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      placement="right"
        <button>test</button>
    </FATooltip>

    <FATooltip
      {...props}
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      placement="bottom"
        <button>test</button>
    </FATooltip>

    <FATooltip
      {...props}
      style={{ margin: "20px 0", padding: "5px 0", minWidth: "7%" }}
      arrow
      placement="left"
        <button>test</button>
    </FATooltip>
  </div>
);

// export const WithLabel = Template.bind({});
// WithLabel.args = {
//   label: 'Label'
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small'
// };
