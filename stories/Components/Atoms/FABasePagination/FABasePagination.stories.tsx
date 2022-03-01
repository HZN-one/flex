import React from "react";
import { FAPagination } from "@Atoms";
import { IFAPaginationProps } from "@Atoms/FAPagination/FAPagination.interface";
import { Box } from "@mui/material";

const story = {
  title: "Atom/Pagination",
  component: FAPagination,
};

export default story;

export const Default = (props: IFAPaginationProps) => (
  <>
    <h3>Default</h3>
    <FAPagination {...props} color="primary" variant="text" />
    <FAPagination {...props} color="secondary" sx={{ marginTop: "3vh" }} />
    <FAPagination
      {...props}
      color="secondary"
      sx={{ marginTop: "3vh" }}
      disabled
    />
    <Box sx={{ display: "flex", alignItems: "flex-start", mt: "16px" }}>
      <Box sx={{ mr: "24px" }}>
        <h3>Size Large</h3>
        <FAPagination {...props} size="large" color="primary" variant="text" />
        <FAPagination
          {...props}
          size="large"
          color="secondary"
          sx={{ marginTop: "3vh" }}
        />
        <FAPagination
          {...props}
          size="large"
          color="secondary"
          sx={{ marginTop: "3vh" }}
          disabled
        />
      </Box>

      <Box>
        <h3>Size Small</h3>
        <FAPagination {...props} size="small" color="primary" variant="text" />
        <FAPagination
          {...props}
          size="small"
          color="secondary"
          sx={{ marginTop: "3vh" }}
        />
        <FAPagination
          {...props}
          size="small"
          color="secondary"
          sx={{ marginTop: "3vh" }}
          disabled
        />
      </Box>
    </Box>
  </>
);

export const Outlined = (props: IFAPaginationProps) => (
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
