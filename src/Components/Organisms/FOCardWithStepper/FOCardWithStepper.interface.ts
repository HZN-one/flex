import { IFMCardProps } from "../../Molecules/FMCard/FMCard.interface";
import { IFMStepperProps } from "../../Molecules/FMStepper/FMStepper.interface";

export interface IFOCardWithStepperProps {
  cardProps: Omit<IFMCardProps, "testID">;
  stepperProps: Omit<IFMStepperProps, "testID">;
}
