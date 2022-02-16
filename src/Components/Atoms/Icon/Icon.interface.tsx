import { IconProps } from "@mui/material";

export interface IIcon extends IconProps {
  testID: `icon-${string}`;
  className?:
    | "material-icons"
    | "material-icons-outlined"
    | "material-icons-two-tone"
    | "material-icons-sharp"
    | "material-icons-round";
}
