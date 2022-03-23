import { IFATextFieldProps } from "../../Atoms/FATextField/FATextField.interface";

export interface IFMMapsTextField extends IFATextFieldProps {
  buttonLabel: string;
  buttonIconName?: string;
  onButtonClick?: () => void;
}
