import React, { memo } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import IFMStepperProps from "./FMStepper.interface";
import { FAButton, FAIcon } from "@Atoms";
import { Grid } from "@mui/material";

export const FMStepper = memo((props: IFMStepperProps) => {
  const { testID, data, stepperColumn } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [previousTitle, setPreviousTitle] = React.useState(data[0].title);
  const [activeChildren, setActiveChildren] = React.useState(data[0].children);
  const isLastStep = data.length - 1 === activeStep;

  const handleNext = () => {
    data[activeStep].onSubmitNext();

    if (!isLastStep) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setPreviousTitle(data[activeStep].title);
      setActiveChildren(data[activeStep + 1].children);
    }
  };

  const handleBack = () => {
    data[activeStep].onSubmitBack();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    if (activeStep > 1) {
      setPreviousTitle(data[activeStep - 2].title);
    }
    setActiveChildren(data[activeStep - 1].children);
  };

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
      <Box sx={{ mt: 3.75, mb: 4.125 }}>{activeChildren}</Box>
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
              {previousTitle}
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
});

FMStepper.displayName = "FMStepper";
