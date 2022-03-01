import React from "react";
import { Meta, Story } from "@storybook/react";

import { FMCard } from "@Molecules";
import { FAButton } from "@Atoms/FAButton";
import { IFMCardProps } from "@Molecules/FMCard/FMCard.interface";

const meta: Meta = {
  title: "Molecules/Card",
  component: FMCard,
};

export default meta;

const Template: Story<IFMCardProps> = (props: IFMCardProps) => (
  <FMCard sx={{ width: "20vw" }} {...props}>
    Card Content
  </FMCard>
);

export const Default = Template.bind({});

Default.args = {
  title: "Card Title",
};

export const withAction = Template.bind({});
withAction.args = {
  actions: <FAButton testID="button-card">Button test</FAButton>,
};

export const withSubtitle = Template.bind({});
withSubtitle.args = {
  subtitle: "To continue, please register to Horizon platform.",
};

export const completeCard = Template.bind({});
completeCard.args = {
  title: "Card Title",
  subtitle: "To continue, please register to Horizon platform.",
  actions: <FAButton testID="button-card">Button test</FAButton>,
};
