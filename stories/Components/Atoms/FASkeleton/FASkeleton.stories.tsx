import React from "react";
import { FASkeleton } from "@Atoms";
import { IFASkeleton } from "@Atoms/FASkeleton/FASkeleton.interfaces";
import { Stack } from "@mui/material";

const story = {
  title: "Atom/Skeleton",
  component: FASkeleton,
};

export default story;

export const Default = (props: IFASkeleton) => (
  <>
    <FASkeleton {...props} width="100%" height="95vh" />
  </>
);

export const CardExample = (props: IFASkeleton) => (
  <Stack spacing={1} width={210}>
    <FASkeleton variant="text" {...props} />
    <FASkeleton variant="circular" width={40} height={40} {...props} />
    <FASkeleton variant="rectangular" width={210} height={118} {...props} />
  </Stack>
);
