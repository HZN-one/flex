import { IFATypographyProps } from "../../Atoms/FATypography/FATypography.interface";

export interface IFMLabelValueProps {
  label: string;
  value?: string;
  propLabel?: Omit<IFATypographyProps, "TestID">;
  propValue?: Omit<IFATypographyProps, "TestID">;
  margin?: "normal" | "none";
}
