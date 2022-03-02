import Box from "@mui/material/Box";
import React from "react";

import { FATypography } from "@Atoms/FATypography";

import { IFMLabelValueProps } from "./FMLabelValue.interface";

const defaultProps = {
  margin: "normal",
};

export const FMLabelValue = <C extends React.ElementType>(
  props: IFMLabelValueProps<C>
) => {
  const { testID, label, value, margin, valueProps } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Box data-testid={testID} sx={{ mb: margin === "none" ? 0 : 2 }}>
      <FATypography
        paragraph={true}
        testID="typography-label"
        variant="captionSemiBold"
        sx={{ mb: "6.82px" }}
      >
        {label}
      </FATypography>

      <FATypography variant="body2" {...valueProps}>
        {value}
      </FATypography>
    </Box>
  );
};

FMLabelValue.displayName = "FMLabelValue";
