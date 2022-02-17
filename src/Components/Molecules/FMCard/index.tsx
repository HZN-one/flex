import React, { memo, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { IFMCard } from "./FMCard.interfaces";
import { FATypography } from "@Atoms/FATypography";
import { Box, Collapse } from "@mui/material";
import { FAIcon } from "@Atoms/Icon";

export const FMCard = memo((props: IFMCard) => {
  const {
    testID,
    actions,
    title,
    children,
    isCollapseAble,
    ...materialUIProps
  } = props;

  const [open, setOpen] = useState(true);
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        {title && (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FATypography
              testID="typography-card"
              variant="h6"
              fontWeight={700}
              sx={{ marginBottom: 3.75 }}
            >
              {title}
            </FATypography>
            {isCollapseAble && (
              <Box>
                <FAIcon
                  onClick={() => {
                    setOpen(!open);
                  }}
                  style={{ cursor: "pointer" }}
                  testID="icon-arrow-collapse"
                >
                  arrow_drop_down
                </FAIcon>
              </Box>
            )}
          </Box>
        )}
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </CardContent>
      {actions && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardActions>{actions}</CardActions>
        </Collapse>
      )}
    </Card>
  );
});

FMCard.displayName = "FMCard";
