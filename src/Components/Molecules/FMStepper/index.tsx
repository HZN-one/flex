import React, { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";

import { FAButton, FAIcon } from "@Atoms";

import { IFMStepperProps } from "./FMStepper.interface";

export const FMStepper = memo((props: IFMStepperProps) => {
  const { testID, data, stepperColumn, stepperActiveStep } = props;
  const [activeStep, setActiveStep] = React.useState(stepperActiveStep ?? 0);

  useEffect(() => {
    if (typeof stepperActiveStep !== "undefined") {
      setActiveStep(stepperActiveStep);
    }
  }, [stepperActiveStep]);

  const isLastStep = data.length - 1 === activeStep;
  const stepperActiveStepProvided = typeof stepperActiveStep !== "undefined";
  const onSubmitNext = data[activeStep].onSubmitNext;
  const onSubmitBack = data[activeStep].onSubmitBack;

  const handleNext = () => {
    if (onSubmitNext) {
      onSubmitNext();
    }

    if (!isLastStep && !stepperActiveStepProvided) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (onSubmitBack) {
      onSubmitBack();
    }

    if (!stepperActiveStepProvided) {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  };

  if (data.length) {
    return (
      <Box data-testid={testID}>
        <Grid container justifyContent="center">
          <Grid item sm={stepperColumn}>
            <Stepper activeStep={activeStep}>
              {data.map((item, index) => {
                return (
                  <Step key={index}>
                    <StepLabel>{item.title}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3.75, mb: 4.125 }} key={activeStep}>
          {data?.[activeStep].children}
        </Box>
        <Grid container justifyContent="space-between">
          <Grid item xs="auto">
            {activeStep !== 0 && (
              <FAButton
                testID={`button-${testID}`}
                variant="text"
                size="small"
                color="inherit"
                startIcon={
                  <FAIcon testID={`icon-${testID}-arrow-back`}>
                    arrow_back_ios
                  </FAIcon>
                }
                onClick={handleBack}
              >
                {data[activeStep - 1].title}
              </FAButton>
            )}
          </Grid>
          <Grid item xs="auto">
            <FAButton
              testID={`button-${testID}`}
              size="small"
              onClick={handleNext}
            >
              {data[activeStep].buttonLabel}
            </FAButton>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return null;
  }
});

FMStepper.displayName = "FMStepper";
