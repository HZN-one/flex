import type { ReactNode } from "react";

export interface IFMStepperProps {
  testID: `stepper-${string}`;
  data: Array<{
    title: string;
    children: ReactNode;
    onSubmitNext: () => void;
    onSubmitBack: () => void;
    buttonLabel: string;
    isPreventNext?: boolean;
    isPreventBack?: boolean;
  }>;
  stepperColumn: number;
}
