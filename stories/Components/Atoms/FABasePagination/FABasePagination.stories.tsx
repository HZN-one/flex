import React from "react";
import { FAPagination } from "@Atoms";
import { IFAPagination } from "@Atoms/FAPagination/FAPagination.interface";

const story = {
  title: "Atom/Pagination",
  component: FAPagination,
};

export default story;

export const Default = (props: IFAPagination) => (
  <>
    <FAPagination {...props} variant="text" />
    <FAPagination {...props} color="secondary" sx={{ marginTop: "3vh" }} />
    <FAPagination
      {...props}
      color="secondary"
      sx={{ marginTop: "3vh" }}
      disabled
    />
  </>
);

export const Outlined = (props: IFAPagination) => (
  <>
    <FAPagination {...props} variant="outlined" />
    <FAPagination
      {...props}
      variant="outlined"
      color="secondary"
      sx={{ marginTop: "3vh" }}
    />
    <FAPagination
      {...props}
      variant="outlined"
      color="secondary"
      sx={{ marginTop: "3vh" }}
      disabled
    />
  </>
);
