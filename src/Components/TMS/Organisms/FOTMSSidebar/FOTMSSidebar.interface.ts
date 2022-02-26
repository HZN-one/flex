export interface IDashboardSidebarProps {
  testID: `sidebar-${string}`;
  open: boolean;
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
