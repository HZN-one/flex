import React from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";

import { IFMDatePickerProps } from "./FMDatePicker.interface";

export const FMDatePicker = (props: IFMDatePickerProps) => {
  const { datePickerType, testID, textFieldProps } = props;

  const renderInput = (params: TextFieldProps) => (
    <TextField {...params} {...textFieldProps} />
  );

  return (
    <Box data-testid={testID} color="primary.main">
      {datePickerType === "date" && (
        <DesktopDatePicker renderInput={renderInput} {...props} />
      )}
      {datePickerType === "time" && (
        <TimePicker {...props} renderInput={renderInput} />
      )}
      {datePickerType === "mobileDate" && (
        <MobileDatePicker {...props} renderInput={renderInput} />
      )}
      {datePickerType === "dateTime" && (
        <DateTimePicker {...props} renderInput={renderInput} />
      )}
    </Box>
  );
};
