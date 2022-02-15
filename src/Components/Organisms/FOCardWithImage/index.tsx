import React, { memo } from "react";
import { Card, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { IFOCardWithImage } from "./FOCardWithImage.interfaces";
import { FATypography, FAButton, FAFormControlLabel } from "@Atoms";

export const FOCardWithImage = memo((props: IFOCardWithImage) => {
  const {
    sx,
    testID,
    actions,
    subtitle,
    title,
    svg,
    option,
    optionLabel,
    handleButtonPrimary,
    handleButtonSecondary,
    buttonPrimary,
    buttonSecondary,
    ...materialUIProps
  } = props;
  return (
    <Card
      data-testid={testID}
      {...materialUIProps}
      sx={{
        ...sx,
        border: "1px solid #D4D4D4",
      }}
    >
      <CardContent>
        {option && (
          <FAFormControlLabel
            label={optionLabel || "optionLabel"}
            testID="form-control-label-test"
            control={option}
          ></FAFormControlLabel>
        )}
        {svg}
        <FATypography
          testID="typography-launchpad"
          textAlign="center"
          variant="h5"
          fontWeight={700}
          color="text.primary"
        >
          {title}
        </FATypography>
        <FATypography
          testID="typography-launchpad"
          textAlign="center"
          variant="body2"
          color="textSecondary"
          letterSpacing="0.2px"
          mt="8px"
        >
          {subtitle}
        </FATypography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {buttonPrimary && (
            <FAButton
              testID="button-register-customer"
              sx={{ mt: 2.5, borderRadius: ".5rem" }}
              onClick={handleButtonPrimary}
            >
              {buttonPrimary}
            </FAButton>
          )}
          {buttonSecondary && (
            <FAButton
              variant="text"
              testID="button-register-customer"
              sx={{ mt: 1, borderRadius: ".5rem", color: "black" }}
              onClick={handleButtonSecondary}
            >
              {buttonSecondary}
            </FAButton>
          )}
        </Box>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FOCardWithImage.displayName = "FOCardWithImage";
