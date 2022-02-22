import React from "react";
import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import tabUnstyledClasses from "@mui/base/TabUnstyled/tabUnstyledClasses";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import buttonUnstyledClasses from "@mui/base/ButtonUnstyled/buttonUnstyledClasses";

import { baseTheme } from "@Definitions/Theme";
import { FATypography } from "@Atoms/FATypography";

const Tabs = styled(TabsUnstyled)`
  overflow: hidden;
  box-shadow: ${baseTheme.shadows[1]};
  border-radius: ${baseTheme.spacing(1)};
  min-width: 200px;
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
  justify-content: center;
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

export const FMTabsMenu = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs defaultValue={0} orientation="vertical">
        <TabsList>
          <Tab>
            <Box sx={{ padding: 2 }}>
              <FATypography testID="typography-tab">One</FATypography>
            </Box>
          </Tab>
          <Tab>
            <Box sx={{ padding: 2 }}>
              <FATypography testID="typography-tab">Two</FATypography>
            </Box>
          </Tab>
          <Tab>
            <Box sx={{ padding: 2 }}>
              <FATypography testID="typography-tab">Three</FATypography>
            </Box>
          </Tab>
        </TabsList>
      </Tabs>
    </Box>
  );
};
