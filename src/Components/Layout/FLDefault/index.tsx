import React, { memo } from "react";
import { Box } from "@mui/material";
import { FOHeader, FOSideBar } from "@Organisms";
import { IFLDefaultProps } from "./FLDefault.interface";

export const FLDefault = memo((props: IFLDefaultProps) => {
  const { testID, children, header, ...sidebarProps } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <FOHeader
        testID="header-layout-default"
        headerType="default"
        position="fixed"
        {...header}
      />
      <FOSideBar testID="sidebar-layout-default" {...sidebarProps} />
      <Box
        data-testid={testID}
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: theme => `${theme.mixins.toolbar.minHeight}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
});

FLDefault.displayName = "FLDefault";
