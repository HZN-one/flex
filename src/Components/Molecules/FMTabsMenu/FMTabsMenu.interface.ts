import { TabsUnstyledOwnProps } from "@mui/base/TabsUnstyled/TabsUnstyledProps";

export interface IFMTabsMenuProps extends Partial<TabsUnstyledOwnProps> {
  testID: `tabs-${string}`;
  tabs: {
    label: string;
    iconName: string;
  }[];
  disabledIndex?: number[];
}
