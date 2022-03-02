import { IFATypographyProps } from "../../Atoms/FATypography/FATypography.interface";

export interface IFMLabelValueProps {
  label: string;
  value?: string;
  propLabel?: Omit<IFATypographyProps, "testID">;
  propValue?: Omit<IFATypographyProps, "testID">;
  margin?: "normal" | "none";
}
