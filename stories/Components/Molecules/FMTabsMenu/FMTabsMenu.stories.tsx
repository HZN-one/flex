import React from "react";
import { Story, Meta } from "@storybook/react";
import Box from "@mui/material/Box";

import { FMTabsMenu } from "@Molecules/FMTabsMenu";
import { FMCard } from "@Molecules/FMCard";
import { FATypography } from "@Atoms/FATypography";

import { IFMTabsMenu } from "@Molecules/FMTabsMenu/FMTabsMenu.interface";

const meta: Meta = {
  title: "Molecules/TabsMenu",
  component: FMTabsMenu,
};

const TabsData = [
  { label: "Individual", iconName: "person_outline" },
  { label: "Company", iconName: "home_work" },
];

const Template: Story<IFMTabsMenu> = props => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <FMTabsMenu
      onChange={(evt, idx) => setActiveIndex(Number(idx))}
      value={activeIndex}
      {...props}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  tabs: TabsData,
};

export const withMaxWidthWrapper = Template.bind({});

withMaxWidthWrapper.args = {
  tabs: TabsData,
};

withMaxWidthWrapper.decorators = [
  StoryDecoractors => <Box maxWidth={200}>{StoryDecoractors()}</Box>,
];

export const withTabDisabled = Template.bind({});

withTabDisabled.args = {
  disabledIndex: [1, 2],
  tabs: [...TabsData, { label: "Test", iconName: "abc" }],
};

export const withContent = Template.bind({});

withContent.decorators = [
  StoryDecoractors => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          gap: 4,
        }}
      >
        <Box maxWidth={200}>
          {StoryDecoractors({
            args: {
              value: activeIndex,
              testID: "tabs-with-content",
              tabs: TabsData,
              onChange: (evt, index) => setActiveIndex(Number(index)),
            },
          })}
        </Box>

        {activeIndex === 0 && (
          <FMCard testID="card-tabs-content">
            <FATypography testID="typography-test" variant="h5" mb={2}>
              {TabsData[0].label}
            </FATypography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'s"} standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </FMCard>
        )}

        {activeIndex === 1 && (
          <FMCard testID="card-tabs-content">
            <FATypography testID="typography-test" variant="h5" mb={2}>
              {TabsData[1].label}
            </FATypography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'s"} standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </FMCard>
        )}
      </Box>
    );
  },
];

export default meta;
