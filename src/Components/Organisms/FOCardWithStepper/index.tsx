import React, { memo } from "react";

import { FMCard } from "@Molecules/FMCard";
import { FMStepper } from "@Molecules/FMStepper";

import { IFOCardWithStepperProps } from "./FOCardWithStepper.interface";

export const FOCardWithStepper = memo((props: IFOCardWithStepperProps) => {
  const { cardProps, stepperProps } = props;
  return (
    <FMCard testID="card-stepper" {...cardProps}>
      <FMStepper testID="stepper-in-card" {...stepperProps} />
    </FMCard>
  );
});

FOCardWithStepper.displayName = "FOCardWithStepper";
