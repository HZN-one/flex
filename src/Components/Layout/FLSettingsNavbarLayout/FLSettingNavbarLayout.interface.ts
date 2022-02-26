import { ReactNode } from "react";

export interface IFLSettingsNavbarLayoutProps {
  testID: `header-${string}`;
  isDrawerCloseable?: boolean;
  title?: string;
  userAvatarSrc?: string;
  accountName?: string;
  popUp?: ReactNode;
  children?: ReactNode;
  headbarPosition: "fixed" | "absolute" | "relative" | "static" | "sticky";
  sections: {
    title: string;
    path: string;
    icon: JSX.Element;
    children?: {
      title: string;
      path: string;
    }[];
  }[];
  handleLogOut?: () => void;
}
