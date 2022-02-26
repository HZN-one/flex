import React, { memo } from "react";
import Box from "@mui/material/Box";

import { FMCard } from "@Molecules/FMCard";
import { FMStepper } from "@Molecules/FMStepper";

import { IFOCardWithStepperProps } from "./FOCardWithStepper.interface";

export const FOCardWithStepper = memo((props: IFOCardWithStepperProps) => {
  const { cardProps, stepperProps } = props;
  return (
    <Box>
      <FMCard testID="card-stepper" {...cardProps}>
        <FMStepper testID="stepper-in-card" {...stepperProps} />
      </FMCard>
    </Box>
  );
});
