// Create storybook stories from FMTimeline component
import React from "react";
import { Story, Meta } from "@storybook/react";
import { FMTimeline } from "@Molecules";
import IFMTimelineProps from "@Molecules/FMTimeline/FMTimeline.interface";

const meta: Meta = {
  title: "Molecules/Timeline",
  component: FMTimeline,
};

export default meta;

const Template: Story<IFMTimelineProps> = props => <FMTimeline {...props} />;

export const Default = Template.bind({});

Default.args = {
  testID: "timeline-test",
  data: [
    {
      title: "Title 1",
      description: "Description 1",
      icon: "fiber_manual_record",
      color: "info",
    },
    {
      title: "Title 2",
      description: "Description 2",
      icon: "location_on",
      color: "primary",
    },
  ],
};
