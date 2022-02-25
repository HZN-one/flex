import { IInput } from "../../Atoms/FATextField/Input.interface";

export interface IFMSearch extends Omit<IInput, "testID"> {
  testID: `search-${string}`;
}
