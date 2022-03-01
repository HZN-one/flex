import { ReactChild } from "react";
import { AccordionProps } from "@mui/material";

export interface IFMAccordionProps extends AccordionProps {
  testID: `accordion-${string}`;
  summary?: ReactChild;
  title?: string;
}
