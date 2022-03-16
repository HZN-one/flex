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
    label = "Pick Date",
    calendars,
    renderFormat,
    value,
    setValue,
    fullWidth,
  } = props;

  const startDate = value[0] ?? new Date();
  const endDate = value[1] ?? new Date();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        calendars={calendars ?? 2}
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
              value={
                format(startDate, renderFormat ?? "dd MMM") +
                " - " +
                format(endDate, renderFormat ?? "dd MMM")
              }
              adornmentPosition="end"
              adornment={
                <FAIconButton testID="icon-button-date-range">
                  <FAIcon
                    testID="icon-date-range"
                    baseClassName="material-icons"
                  >
                    date_range
                  </FAIcon>
                </FAIconButton>
              }
              readOnly
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};
