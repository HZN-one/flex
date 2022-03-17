import { Dispatch, SetStateAction } from "react";
import { DateRange, DateRangePicker } from "@mui/lab";

import { IFATextFieldProps } from "../../Atoms/FATextField/FATextField.interface";

type DateRangePickerProps = React.ComponentProps<typeof DateRangePicker>;

export interface IFMDateRangePicker {
  testID: `date-range-picker-${string}`;
  label: string;
  value: DateRange<Date>;
  setValue: Dispatch<SetStateAction<DateRange<Date>>>;
  calendars?: DateRangePickerProps["calendars"];
  renderFormat?: string;
  fullWidth?: boolean;
  size?: IFATextFieldProps["size"];
}
