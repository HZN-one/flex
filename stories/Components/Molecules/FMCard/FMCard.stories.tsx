import React from "react";
import { Meta, Story } from "@storybook/react";
import { FMCard } from "@Molecules";

import { FAButton } from "@Atoms/FAButton";
import { IFMCard } from "@Molecules/FMCard/FMCard.interface";

const meta: Meta = {
  title: "Molecules/Card",
  component: FMCard,
};

export default meta;

const Template: Story<IFMCard> = (props: IFMCard) => (
  <FMCard sx={{ width: "20vw" }} {...props} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Card Title",
  children: "Card Content",
  actions: (
    <FAButton testID="button-card" size="small">
      Learn More
    </FAButton>
  ),
};

export const withCustomChildren = (props: IFMCard) => (
  <>
    <FMCard sx={{ width: "20vw" }} {...props}>
      <p>This is card custom content</p>
    </FMCard>
  </>
);

export const withAction = Template.bind({});
withAction.args = {
  actions: <FAButton testID="button-card">Button test</FAButton>,
};
