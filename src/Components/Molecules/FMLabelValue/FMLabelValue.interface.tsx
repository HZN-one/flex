import { IFATypography } from "@Atoms/FATypography/FATypography.interfaces";

export interface IFMLabelValue {
  label: string;
  value?: string;
  propLabel?: Omit<IFATypography, "TestID">;
  propValue?: Omit<IFATypography, "TestID">;
}
