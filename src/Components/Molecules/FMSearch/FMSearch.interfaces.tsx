import { IInput } from "@Atoms/FATextField/Input.interface";
import { StandardTextFieldProps } from "@mui/material";

export interface IFMSearch extends Omit<IInput, "testID"> {
  testID: `search-${string}`;
  sx?: StandardTextFieldProps["sx"];
}
