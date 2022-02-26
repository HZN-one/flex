import { IFATextFieldProps } from "../../Atoms/FATextField/FATextField.interface";

export interface IFMSearchProps extends Omit<IFATextFieldProps, "testID"> {
  testID: `search-${string}`;
}
