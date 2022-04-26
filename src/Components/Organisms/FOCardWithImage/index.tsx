import React, { memo } from "react";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";

import { FARadio, FAButton, FAFormControlLabel } from "@Atoms";
import { FMCard } from "@Molecules";

import { getFlexJustifyContent } from "@Definitions/helpers";

import { IFOCardWithImageProps } from "./FOCardWithImage.interface";

export const FOCardWithImage = memo((props: IFOCardWithImageProps) => {
  const {
    testID,
    image,
    imagePosition,
    header: { ...header },
    buttonPrimary,
    buttonPrimaryPosition,
    buttonSecondary,
    buttonSecondaryPosition,
    control,
    actionEndAdornment,
    isSelected,
    isDisabled,
    ...cardProps
  } = props;

  return (
    <FMCard
      testID={testID}
      {...cardProps}
      className={isSelected && !isDisabled ? "flex-paper-selected" : ""}
      sx={{
        ...(isDisabled && {
          filter: "grayscale(1)",
          opacity: 0.6,
          pointerEvents: "none",
        }),
      }}
    >
      {control && (
        <Box mb={3}>
          <FAFormControlLabel
            testID="form-control-label-card-image"
            control={
              <FARadio
                testID="radio-card-control"
                size="medium"
                checked={control.isChecked}
              />
            }
            label={control.label}
          />
        </Box>
      )}

      <Box
        display="flex"
        justifyContent={getFlexJustifyContent(imagePosition)}
        mb={3}
      >
        {image}
      </Box>
      <Box display="flex" justifyContent="center" textAlign="center">
        <CardHeader {...header} />
      </Box>

      {buttonPrimary && (
        <Box
          mt={4}
          display="flex"
          justifyContent={getFlexJustifyContent(buttonPrimaryPosition)}
        >
          <FAButton testID="button-primary" {...buttonPrimary} />
        </Box>
      )}
      {buttonSecondary && buttonPrimary && (
        <Box
          mt={1}
          display="flex"
          justifyContent={getFlexJustifyContent(buttonSecondaryPosition)}
        >
          <FAButton
            testID="button-primary"
            variant="text"
            color="secondary"
            {...buttonSecondary}
          />
        </Box>
      )}
      {actionEndAdornment}
    </FMCard>
  );
});

FOCardWithImage.displayName = "FOCardWithImage";
