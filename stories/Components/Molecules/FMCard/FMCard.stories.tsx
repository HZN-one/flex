import React from "react";
import { ComponentStory } from "@storybook/react";
import { FMCard } from "@Molecules";
import { FAButton } from "@Atoms/FAButton";
import { IFMCard } from "@Molecules/FMCard/FMCard.interfaces";

const story = {
  title: "Molecules/Card",
  component: FMCard,
};

export default story;

const Template: ComponentStory<typeof FMCard> = (props: IFMCard) => (
  <FMCard sx={{ width: "20vw" }} {...props} />
);

export const withCustomChildren = (props: IFMCard) => (
  <>
    <FMCard sx={{ width: "20vw" }} {...props}>
      <p>This is card custom content</p>
    </FMCard>
  </>
);

export const withAction = Template.bind({});
withAction.args = {
  actions: <FAButton testID="button-card">Button test</FAButton>,
};
