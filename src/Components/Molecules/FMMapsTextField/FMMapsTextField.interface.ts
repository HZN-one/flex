import { IFATextFieldProps } from "../../Atoms/FATextField/FATextField.interface";

export interface IFMMapsTextField extends Omit<IFATextFieldProps, "testID"> {
  testID: `maps-textfield-${string}`;
  buttonLabel: string;
  buttonIconName?: string;
  onButtonClick?: () => void;
}
