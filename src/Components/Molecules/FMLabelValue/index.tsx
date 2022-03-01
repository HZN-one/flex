import { Box } from "@mui/system";
import React, { memo } from "react";
import { FATypography } from "@Atoms/FATypography";
import { IFMLabelValueProps } from "./FMLabelValue.interface";

const defaultProps = {
  margin: "normal",
};

export const FMLabelValue = memo((props: IFMLabelValueProps) => {
  const { label, value, propLabel, propValue, margin } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Box sx={{ mb: margin === "none" ? 0 : 2 }}>
      <FATypography
        paragraph={true}
        testID="typography-label"
        variant="captionSemiBold"
        sx={{ mb: "6.82px" }}
        {...propLabel}
      >
        {label}
      </FATypography>

      <FATypography testID="typography-value" variant="body2" {...propValue}>
        {value}
      </FATypography>
    </Box>
  );
});

FMLabelValue.displayName = "FMLabelValue";
