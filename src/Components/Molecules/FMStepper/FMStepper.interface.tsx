import type { ReactNode } from "react";

export default interface IFMStepperProps {
  testID: `stepper-${string}`;
  data: Array<{
    title: string;
    children: ReactNode;
  }>;
  buttonSubmit: JSX.Element;
}
