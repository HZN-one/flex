import { BaseDatePickerProps } from "@mui/lab/DatePicker/shared";
import { BaseDateTimePickerProps } from "@mui/lab/DateTimePicker/shared";
import { BaseTimePickerProps } from "@mui/lab/TimePicker/shared";
import { TextFieldProps } from "@mui/material";

export interface IFMDatePickerGeneral {
  testID: `date-picker-${string}`;
  datePickerType: "date" | "time" | "mobileDate" | "dateTime";
  textFieldProps?: TextFieldProps;
}

export interface IFMDatePickerDate
  extends Omit<BaseDatePickerProps<Date>, "renderInput"> {
  datePickerType: "date";
}
export interface IFMDatePickerTime
  extends Omit<BaseTimePickerProps<Date>, "renderInput"> {
  datePickerType: "time";
}
export interface IFMDatePickerMobileDate
  extends Omit<BaseDatePickerProps<Date>, "renderInput"> {
  datePickerType: "mobileDate";
}
export interface IFMDatePickerDateTime
  extends Omit<BaseDateTimePickerProps<Date>, "renderInput"> {
  datePickerType: "dateTime";
}

export type IFMDatePickerProps = (
  | IFMDatePickerDate
  | IFMDatePickerTime
  | IFMDatePickerMobileDate
  | IFMDatePickerDateTime
) &
  IFMDatePickerGeneral;
