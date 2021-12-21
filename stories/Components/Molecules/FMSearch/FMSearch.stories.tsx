import React from "react";
import { ComponentStory } from "@storybook/react";
import { FMSearch, FAFormControl } from "@Components";
import { IFMSearch } from "Components/Molecules/FMSearch/FMSearch.interfaces";
import { IFAFormControl } from "@Atoms/FAFormControl/FAFormControl.interfaces";

const story = {
  title: "Molecules/Search",
  component: FMSearch,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "placeholder",
  },
};

export default story;

export const Default = (props: IFMSearch) => (
  <>
    <FMSearch {...props}>{props.children}</FMSearch>
  </>
);

const Template2: ComponentStory<typeof FAFormControl> = (
  props: IFAFormControl
) => (
  <FAFormControl {...props}>
    <FMSearch testID="search-test"></FMSearch>
  </FAFormControl>
);

export const WithHelperText = Template2.bind({});
WithHelperText.args = {
  helperText: `it can't be empty`,
};
