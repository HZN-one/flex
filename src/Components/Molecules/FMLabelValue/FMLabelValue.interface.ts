import React from "react";

import { IFATypographyProps } from "../../Atoms/FATypography/FATypography.interface";

export type IFMLabelValueProps<C extends React.ElementType> = {
  testID: `label-value-${string}`;
  label: string;
  value?: string | number;
  valueProps?: IFATypographyProps<C>;
  margin?: "normal" | "none";
};
