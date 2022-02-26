import React, { memo } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { FAIcon, FATypography } from "@Atoms";

import { IFMTimelineProps } from "./FMTimeline.interface";

export const FMTimeline = memo((props: IFMTimelineProps) => {
  const { testID, data } = props;

  return (
    <Timeline data-testid={testID}>
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <FAIcon
                testID={`icon-${testID}-title-${index}`}
                color={item.color}
                className="material-icons-round"
              >
                {item.icon}
              </FAIcon>
            </TimelineDot>
            {index !== data.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <FATypography
              testID={`typography-${testID}-title-${index}`}
              variant="captionSemiBold"
              color="text.primary"
            >
              {item.title}
            </FATypography>
            <FATypography
              testID={`typography-${testID}-description-${index}`}
              variant="body2"
              color="text.primary"
            >
              {item.description}
            </FATypography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
});

FMTimeline.displayName = "FMTimeline";
