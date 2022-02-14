import { Box } from "@mui/system";
import React, { memo } from "react";
import { FATypography } from "@Atoms/FATypography";
import { IFMLabelValue } from "./FMLabelValue.interface";

export const FMLabelValue = memo((props: IFMLabelValue) => {
  const { label, value, propLabel, propValue } = props;

  return (
    <Box sx={{ mb: 2 }}>
      <FATypography
        testID="typography-label"
        variant="captionSemiBold"
        sx={{ mb: 1 }}
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
