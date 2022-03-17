import type { ReactNode } from "react";

export interface IFMStepperProps {
  testID: `stepper-${string}`;
  data: Array<{
    title: string;
    children: ReactNode;
    onSubmitNext?: ({
      activeStep,
      setActiveStep,
    }: {
      activeStep: number;
      setActiveStep: (value: number) => void;
    }) => void;
    onSubmitBack?: ({
      activeStep,
      setActiveStep,
    }: {
      activeStep: number;
      setActiveStep: (value: number) => void;
    }) => void;
    buttonLabel: string;
  }>;
  stepperColumn: number;
  isControlled?: boolean;
  onSubmitFinish?: () => void;
}
