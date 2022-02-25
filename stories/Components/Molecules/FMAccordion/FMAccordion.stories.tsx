import React from "react";
import { Meta, Story } from "@storybook/react";

import { FMAccordion } from "@Molecules";
import { IFMAccordion } from "@Molecules/FMAccordion/FMAccordion.interface";

const meta: Meta = {
  title: "Molecules/Accordion",
  component: FMAccordion,
};

export default meta;

const Template: Story<IFMAccordion> = (props: IFMAccordion) => (
  <FMAccordion sx={{ width: "20vw" }} {...props} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Card Title",
  children: "Card Content",
};

export const withCustomChildren = (props: IFMAccordion) => (
  <>
    <FMAccordion sx={{ width: "20vw" }} {...props}>
      <p>This is accordion custom content</p>
    </FMAccordion>
  </>
);
