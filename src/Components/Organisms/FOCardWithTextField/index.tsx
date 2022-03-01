import React, { memo } from "react";
import { Card, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FATypography, FAButton } from "@Atoms";

import { IFOCardWithTextFieldProps } from "./FOCardWithTextField.interface";

export const FOCardWithTextField = memo((props: IFOCardWithTextFieldProps) => {
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
      elevation={1}
      sx={{
        ...sx,
      }}
    >
      <CardContent>
        <FATypography
          testID="typography-signIn"
          textAlign="left"
          variant="h3"
          color="text.primary"
        >
          {title}
        </FATypography>

        <FATypography
          testID="typography-signIn"
          textAlign="left"
          variant="body1"
          color="textSecondary"
          sx={{ pb: 3.75, mt: 1 }}
        >
          {subtitle}
        </FATypography>
        <form onSubmit={onSubmit} noValidate={noValidate}>
          <Box>{form}</Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {firstLink}
          </Box>
          <FAButton
            testID="button-submit"
            color="primary"
            sx={{
              mt: 1,
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
