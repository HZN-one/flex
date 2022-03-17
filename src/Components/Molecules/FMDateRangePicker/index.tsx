import React from "react";
import DateRangePicker from "@mui/lab/DateRangePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import format from "date-fns/format";
import Box from "@mui/material/Box";

import { FATextField, FAIcon, FAIconButton } from "@Atoms";

import { IFMDateRangePicker } from "./FMDateRangePicker.interface";

/**
 * @param props
 * @notes on renderFormat props date format (dd) and year format(yy) must be in lowercase e.g dd.MMM.yyyy
 */

export const FMDateRangePicker = (props: IFMDateRangePicker) => {
  const {
    testID,
    label = "Pick Date",
    calendars = 2,
    renderFormat = "dd MMM",
    value,
    setValue,
    fullWidth,
    size,
    margin,
  } = props;

  const startDate = value[0] ?? new Date();
  const endDate = value[1] ?? new Date();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        data-testid={testID}
        value={value}
        calendars={calendars}
        onChange={newValue => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <Box
            width={fullWidth ? "100%" : undefined}
            onClick={evt => {
              if (startProps.inputProps && startProps.inputProps.onFocus) {
                startProps.inputProps.onFocus(evt as any);
              }
            }}
          >
            <input
              ref={startProps.inputRef as React.Ref<HTMLInputElement>}
              {...startProps.inputProps}
              type="hidden"
            />
            <input
              ref={endProps.inputRef as React.Ref<HTMLInputElement>}
              {...endProps.inputProps}
              type="hidden"
            />
            <FATextField
              testID="input-date-range-picker"
              fullWidth
              label={label}
              size={size}
              margin={margin}
              value={
                format(startDate, renderFormat) +
                " - " +
                format(endDate, renderFormat)
              }
              adornmentPosition="end"
              adornment={
                <FAIcon testID="icon-date-range" baseClassName="material-icons">
                  date_range
                </FAIcon>
              }
              readOnly
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};
