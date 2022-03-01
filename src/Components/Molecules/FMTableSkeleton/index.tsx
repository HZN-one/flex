import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";
import React, { memo } from "react";

import { IFMTableSkeletonProps } from "./FMTableSkeleton.interface";

export const FMTableSkeleton = memo((props: IFMTableSkeletonProps) => {
  const { testID, columns, rows } = props;
  const tableColumns = [];
  const tableRows = [];

  for (let c = 0; c < columns; c++) {
    tableColumns.push(
      <TableCell key={c}>
        <Skeleton animation="wave" height={20} />
      </TableCell>
    );
  }

  for (let r = 0; r < rows; r++) {
    tableRows.push(<TableRow key={r}>{tableColumns}</TableRow>);
  }

  return <TableBody data-testid={testID}>{tableRows}</TableBody>;
});

FMTableSkeleton.displayName = "FMTableSkeleton";
