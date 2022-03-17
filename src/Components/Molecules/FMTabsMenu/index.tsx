import React from "react";
import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";

import { FAIcon } from "@Atoms/FAIcon";
import { FATypography } from "@Atoms/FATypography";
import { baseTheme } from "@Definitions/Theme";

import { IFMTabsMenuProps } from "./FMTabsMenu.interface";

const Tabs = styled(TabsUnstyled)`
  overflow: hidden;
  box-shadow: ${baseTheme.shadows[1]};
  border-radius: ${baseTheme.spacing(1)};
  min-width: 200px;
  background-color: ${baseTheme.palette.common.white};
  height: fit-content;
`;

const TabsList = styled(TabsListUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  flex-direction: column;
`;

const Tab = styled(TabUnstyled)`
  color: ${baseTheme.palette.text.primary};
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  border: none;
  display: flex;
  position: relative;

  &:hover {
    background-color: ${baseTheme.palette.action.hover};
  }

  &:focus {
    background-color: ${baseTheme.palette.action.hover};
  }

  &.${tabUnstyledClasses.selected} {
    &:before {
      content: "";
      position: absolute;
      background-color: ${baseTheme.palette.action.active};
      width: 4px;
      height: 100%;
      bottom: 0;
      left: 0;
    }
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FMTabsMenu = ({
  testID,
  tabs,
  disabledIndex,
  ...materialUiProps
}: IFMTabsMenuProps) => {
  return (
    <Tabs
      data-testid={testID}
      {...materialUiProps}
      defaultValue={0}
      orientation="vertical"
    >
      <TabsList>
        {tabs.map(({ label, iconName }, idx) => {
          const isDisabled = disabledIndex?.some(index => index === idx);
          const isActive = idx === materialUiProps.value;

          return (
            <Tab key={idx} sx={{ padding: 0 }} disabled={isDisabled}>
              <Box
                padding={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1.5}
              >
                <FAIcon testID="icon-tab">{iconName}</FAIcon>
                <FATypography
                  testID="typography-tab"
                  variant={isActive ? "bodySemiBold2" : "body2"}
                >
                  {label}
                </FATypography>
              </Box>
            </Tab>
          );
        })}
      </TabsList>
    </Tabs>
  );
};

FMTabsMenu.displayName = "FMTabsMenu";
