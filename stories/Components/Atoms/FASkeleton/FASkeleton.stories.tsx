import React from "react";
import { FASkeleton } from "@Atoms";
import { IFASkeleton } from "@Atoms/FASkeleton/FASkeleton.interface";
import { Stack } from "@mui/material";

const story = {
  title: "Atom/Skeleton",
  component: FASkeleton,
};

export default story;

export const Default = (props: IFASkeleton) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="text" {...props} />
  </Stack>
);

export const Circlar = (props: IFASkeleton) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="circular" width={40} height={40} {...props} />
  </Stack>
);

export const Rectangular = (props: IFASkeleton) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="rectangular" width={210} height={118} {...props} />
  </Stack>
);
