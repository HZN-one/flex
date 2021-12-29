import type { ReactNode } from "react";

export default interface IDashboardNavbarProps {
  testID: `header-${string}`;
  open?: boolean;
  children?: ReactNode;
  popUp: ReactNode;
  content: (
    | {
        title: string;
        path: string;
        icon: string;
        role: string;
        children?: undefined;
      }
    | {
        title: string;
        path: string;
        icon: string;
        role: string;
        children: {
          title: string;
          path: string;
        }[];
      }
  )[];
}
