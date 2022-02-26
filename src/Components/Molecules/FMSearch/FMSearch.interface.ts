import { IFATextFieldProps } from "../../Atoms/FATextField/FATextField.interface";

export interface IFMSearch extends Omit<IFATextFieldProps, "testID"> {
  testID: `search-${string}`;
}
