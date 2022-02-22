import { TabsUnstyledOwnProps } from "@mui/base/TabsUnstyled/TabsUnstyledProps";

export default interface IFMTabsMenu extends Partial<TabsUnstyledOwnProps> {
  testID: `tabs-${string}`;
  tabs: {
    label: string;
    iconName: string;
  }[];
}
