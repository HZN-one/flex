import { IconProps } from "@mui/material";

export interface FAIconProps extends IconProps {
  testID: `icon-${string}`;
  baseClassName?:
    | "material-icons"
    | "material-icons-outlined"
    | "material-icons-two-tone"
    | "material-icons-sharp"
    | "material-icons-round";
}
