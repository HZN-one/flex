import { IFATypographyProps } from "../../Atoms/FATypography/FATypography.interface";

export interface IFMLabelValue {
  label: string;
  value?: string;
  propLabel?: Omit<IFATypographyProps, "TestID">;
  propValue?: Omit<IFATypographyProps, "TestID">;
  margin?: "normal" | "none";
}
