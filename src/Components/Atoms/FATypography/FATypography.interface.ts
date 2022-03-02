import { TypographyProps } from "@mui/material";

type componentOverride = "a" | "p" | "span";

export type IFATypographyProps = {
  testID: `typography-${string}`;
} & TypographyProps<componentOverride, { component?: componentOverride }>;
