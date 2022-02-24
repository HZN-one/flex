import React, { memo } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import { IFMAccordion } from "./FMAccordion.interface";
import { FATypography } from "@Atoms/FATypography";
import { FAIcon } from "@Atoms/Icon";

export const FMAccordion = memo((props: IFMAccordion) => {
  const { testID, title, summary, children, ...materialUIProps } = props;
  return (
    <Accordion data-testid={testID} square disableGutters {...materialUIProps}>
      <AccordionSummary
        expandIcon={
          <FAIcon testID="icon-accordion" sx={{ color: "text.primary" }}>
            arrow_drop_down
          </FAIcon>
        }
      >
        {title && (
          <FATypography testID="typography-fleet-details" variant="h6">
            {title}
          </FATypography>
        )}
        {summary}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
});

FMAccordion.displayName = "FMAccordion";
