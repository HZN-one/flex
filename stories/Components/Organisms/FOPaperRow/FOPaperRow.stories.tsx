import React from "react";
import { Meta, Story } from "@storybook/react";

import { FAChip, FAIcon, FAIconButton } from "@Atoms";
import { FOPaperRow } from "@Organisms";

import { IFOPaperRowProps } from "@Organisms/FOPaperRow/FOPaperRow.interface";

const meta: Meta = {
  title: "Organisms/PaperRow",
  component: FOPaperRow,
};

const PaperRowItems: IFOPaperRowProps["items"] = [
  {
    title: "Title",
    children: "Description",
  },
  {
    title: "Title",
    children: "Description",
  },
  {
    title: "Title",
    children: "Description",
  },
  {
    title: "Title",
    children: "Description",
  },
  {
    title: "Title",
    children: "Description",
  },
  {
    title: "Title",
    children: <FAChip testID="chip-description" label="Completed" />,
  },
];

const Template: Story<IFOPaperRowProps> = props => (
  <FOPaperRow {...props} items={PaperRowItems} />
);

export const Default = Template.bind({});

export const WithAction = Template.bind({});

WithAction.args = {
  actions: (
    <FAIconButton testID="icon-button-arrow-forward-ios">
      <FAIcon testID="icon-arrow-forward-ios" fontSize="small">
        arrow_forward_ios
      </FAIcon>
    </FAIconButton>
  ),
};

export default meta;
