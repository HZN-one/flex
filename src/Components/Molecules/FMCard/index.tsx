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
    isCollapsible,
    ...materialUIProps
  } = props;

  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card data-testid={testID} {...materialUIProps}>
      <CardContent>
        {title && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: isOpen ? 3.75 : 0,
            }}
          >
            <FATypography
              testID="typography-card"
              variant="h6"
              fontWeight={700}
            >
              {title}
            </FATypography>
            {isCollapsible && (
              <Box>
                <FAIcon
                  onClick={() => {
                    setIsOpen(!isOpen);
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
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </CardContent>
      {actions && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <CardActions>{actions}</CardActions>
        </Collapse>
      )}
    </Card>
  );
});

FMCard.displayName = "FMCard";
