import { IconProps } from "@mui/material";

export interface IIcon extends IconProps {
  iconName: string;
  testID: `icon-${string}`;
}
