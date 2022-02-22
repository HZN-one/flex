import { TabUnstyledProps } from "@mui/base";

export default interface IFMTabsMenu extends Partial<TabUnstyledProps> {
  testID: `tabs-${string}`;
  tabs: {
    label: string;
    iconName: string;
  }[];
}
