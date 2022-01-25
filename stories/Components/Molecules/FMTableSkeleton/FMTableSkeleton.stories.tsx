import React from "react";
import { FMTableSkeleton } from "@Molecules";
import IFMTableSkeletonProps from "@Molecules/FMTableSkeleton/FMTableSkeleton.interface";

const story = {
  title: "Molecules/Table Skeleton",
  component: FMTableSkeleton,
};

export default story;

export const Default = (props: IFMTableSkeletonProps) => (
  <>
    <FMTableSkeleton {...props} />
  </>
);

export const TableExample = (props: IFMTableSkeletonProps) => (
  <>
    <FMTableSkeleton {...props} />
  </>
);
