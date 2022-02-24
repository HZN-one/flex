import { ReactChild } from "react";
import { AccordionProps } from "@mui/material";

export interface IFMAccordion extends AccordionProps {
  testID: `accordion-${string}`;
  summary?: ReactChild;
  title?: string;
}
