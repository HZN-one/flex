import React from "react";
import { Meta, Story } from "@storybook/react";

import { FMDatePicker } from "@Molecules";

import { IFMDatePickerProps } from "@Molecules/FMDatePicker/FMDatePicker.interface";

const meta: Meta = {
  title: "Molecules/Date Picker",
  component: FMDatePicker,
};

export const DesktopDate: Story<IFMDatePickerProps> = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FMDatePicker
      testID="date-picker-desktop-date"
      datePickerType="date"
      label="Date desktop"
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
    />
  );
};

export const Time: Story<IFMDatePickerProps> = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FMDatePicker
      testID="date-picker-time"
      datePickerType="time"
      label="Time"
      value={value}
      onChange={handleChange}
    />
  );
};

export const MobileDate: Story<IFMDatePickerProps> = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FMDatePicker
      testID="date-picker-mobileDate"
      datePickerType="mobileDate"
      label="Mobile Date"
      value={value}
      onChange={handleChange}
    />
  );
};

export const DateTime: Story<IFMDatePickerProps> = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FMDatePicker
      testID="date-picker-dateTime"
      datePickerType="dateTime"
      label="Date Time"
      value={value}
      onChange={handleChange}
    />
  );
};

export default meta;
