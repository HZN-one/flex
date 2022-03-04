import React from "react";
import { Stack } from "@mui/material";

import { IFASkeletonProps } from "@Atoms/FASkeleton/FASkeleton.interface";
import { FASkeleton } from "@Atoms";

const story = {
  title: "Atom/Skeleton",
  component: FASkeleton,
};

export default story;

export const Default = (props: IFASkeletonProps) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="text" {...props} />
  </Stack>
);

export const Circlar = (props: IFASkeletonProps) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="circular" width={40} height={40} {...props} />
  </Stack>
);

export const Rectangular = (props: IFASkeletonProps) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="rectangular" width={210} height={118} {...props} />
  </Stack>
);
