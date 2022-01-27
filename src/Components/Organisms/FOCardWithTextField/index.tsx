import React, { memo } from "react";
import { Card, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { IFOCardWithTextField } from "./FOCardWithTextField.interfaces";
import { FATypography, FAButton, FALink } from "@Atoms";

export const FOCardWithTextField = memo((props: IFOCardWithTextField) => {
  const {
    sx,
    testID,
    actions,
    onSubmit,
    form,
    subtitle,
    title,
    buttonPrimary,
    firstLink,
    secondLink,
    noValidate,
    ...materialUIProps
  } = props;
  return (
    <Card
      data-testid={testID}
      {...materialUIProps}
      sx={{
        ...sx,
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <form onSubmit={onSubmit} noValidate={noValidate}>
          <FATypography
            testID="typography-signIn"
            textAlign="left"
            variant="h3"
            fontWeight={700}
            color="text.primary"
          >
            {title}
          </FATypography>

          <FATypography
            testID="typography-signIn"
            textAlign="left"
            variant="body1"
            letterSpacing="0.2px"
            color="textSecondary"
            sx={{ p: "0 0 38px 0" }}
          >
            {subtitle}
          </FATypography>

          <Box>{form}</Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <FALink testID="link-signIn" href="/forgot-password">
              {firstLink}
            </FALink>
          </Box>
          <FAButton
            testID="button-submit"
            sx={{
              marginTop: "10px",
              bgcolor: "primary",
              borderRadius: "8px",
            }}
            variant="contained"
            type="submit"
            fullWidth
          >
            {buttonPrimary ?? "buttonPrimary"}
          </FAButton>
          <Box sx={{ mt: "10px" }}>{secondLink}</Box>
        </form>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
});

FOCardWithTextField.displayName = "FOCardWithTextField";
