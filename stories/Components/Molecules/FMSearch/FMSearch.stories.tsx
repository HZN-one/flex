import React from "react";
import { Story } from "@storybook/react";
import { FMSearch } from "@Molecules";
import { IFMSearchProps } from "@Molecules/FMSearch/FMSearch.interface";

const story = {
  title: "Molecules/Search",
  component: FMSearch,
  argTypes: {
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "Search",
  },
};

export default story;

const Template: Story<IFMSearchProps> = props => (
  <FMSearch {...props} testID="search-textfield"></FMSearch>
);

export const Default = Template.bind({});

Default.args = {
  size: "small",
};

export const Large = Template.bind({});

Large.args = {
  size: "medium",
};
