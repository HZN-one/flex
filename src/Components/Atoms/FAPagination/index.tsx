import React, { memo } from "react";
import { Pagination, Stack } from "@mui/material";
import { IFAPagination } from "./FAPagination.interface";

export const FAPagination = memo((props: IFAPagination) => {
  const { testID, count, ...materialUIProps } = props;
  return (
    <Stack spacing={2}>
      <Pagination count={count} data-testid={testID} {...materialUIProps} />
    </Stack>
  );
});

FAPagination.displayName = "FAPagination";
