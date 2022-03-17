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
  <FMCard {...props}>Card Content</FMCard>
);

export const Default = Template.bind({});

export const WithHeader = Template.bind({});

WithHeader.args = {
  header: {
    subheader: "Card Subheader",
    title: "Card Title",
  },
};

export const WithActions = Template.bind({});

WithActions.args = {
  actions: {
    children: <FAButton testID="button-card">Card Action Button</FAButton>,
  },
};

export const completeCard = Template.bind({});
completeCard.args = {
  header: {
    subheader: "Card Subheader",
    title: "Card Title",
  },
  actions: {
    children: <FAButton testID="button-card">Card Action Button</FAButton>,
  },
};
