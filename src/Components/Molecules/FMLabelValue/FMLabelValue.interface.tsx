import { IFATypography } from "@Atoms/FATypography/FATypography.interfaces";

export interface IFMLabelValue {
  label: string;
  value?: string | number;
  propLabel?: Omit<IFATypography, "TestID">;
  propValue?: Omit<IFATypography, "TestID">;
  margin?: "normal" | "none";
}
