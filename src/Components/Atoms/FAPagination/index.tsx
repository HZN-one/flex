import React, { memo } from "react";
import { Pagination, Stack } from "@mui/material";
import { IFAPagination } from "./FAPagination.interface";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  large: {
    "& li .Mui-selected": {
      minWidth: "40px",
      minHeight: "40px",
      height: "100%",
      borderRadius: "20px",
    },
    "& li button": {
      fontSize: "16px",
    },
  },
  small: {
    "& li .Mui-selected": {
      width: "32px",
      height: "32px",
      // height: "100%",
      borderRadius: "20px",
    },
    "& li button": {
      fontSize: "14px",
    },
  },
}));

export const FAPagination = memo((props: IFAPagination) => {
  const { testID, count, size, ...materialUIProps } = props;
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination
        className={size === "small" ? classes.small : classes.large}
        size={size}
        count={count}
        data-testid={testID}
        {...materialUIProps}
      />
    </Stack>
  );
});

FAPagination.displayName = "FAPagination";
