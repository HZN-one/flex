import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { DateRange } from "@mui/lab";
import { Stack } from "@mui/material";

import { FMDateRangePicker } from "@Molecules";

import { IFMDateRangePicker } from "@Molecules/FMDateRangePicker/FMDateRangePicker.interface";

const meta: Meta = {
  title: "Molecules/Date Range Picker",
  component: FMDateRangePicker,
};

export default meta;

const Template: Story<IFMDateRangePicker> = props => (
  <FMDateRangePicker {...props} />
);

export const Default = Template.bind({});

Default.decorators = [
  StoryDecorators => {
    const [value, setValue] = useState<DateRange<Date>>([null, null]);

    return StoryDecorators({
      args: {
        testID: "date-range-picker-default",
        label: "Default Date Picker",
        value,
        setValue,
      },
    });
  },
];

export const Sizes = Template.bind({});

Sizes.decorators = [
  StoryDecorators => {
    const [value, setValue] = useState<DateRange<Date>>([null, null]);

    return (
      <Stack spacing={2} direction="row">
        {StoryDecorators({
          args: {
            testID: "date-range-picker-small",
            label: "Small Date Picker",
            value,
            setValue,
            size: "small",
          },
        })}
        {StoryDecorators({
          args: {
            testID: "date-range-picker-medium",
            label: "Medium Date Picker",
            value,
            setValue,
            size: "medium",
          },
        })}
      </Stack>
    );
  },
];

export const CustomRenderFormat = Template.bind({});

CustomRenderFormat.decorators = [
  StoryDecorators => {
    const [value, setValue] = useState<DateRange<Date>>([null, null]);

    return StoryDecorators({
      args: {
        testID: "date-range-picker-custom-render-format",
        label: "Custom Render Format Date Picker",
        value,
        setValue,
        renderFormat: "dd/MM/yyyy",
      },
    });
  },
];
