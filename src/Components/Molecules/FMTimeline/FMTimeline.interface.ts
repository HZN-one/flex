export interface IFMTimelineProps {
  testID: `timeline-${string}`;
  data: Array<{
    title: string;
    description: string;
    icon: string;
    color:
      | "action"
      | "disabled"
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning"
      | undefined;
  }>;
}
