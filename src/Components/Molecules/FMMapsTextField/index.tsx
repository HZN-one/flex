import React, { memo } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

import { FAButton, FAIcon, FATextField, FATypography } from "@Atoms";

import { DEFAULT_IMAGE_MAPS_PLACEHOLDER } from "@Definitions/constants";

import { IFMMapsTextField } from "./FMMapsTextField.interface";

export const FMMapsTextField = memo((props: IFMMapsTextField) => {
  const {
    testID,
    label,
    buttonLabel,
    buttonIconName,
    onButtonClick,
    variant = "standard",
    fullWidth = true,
    ...textFieldProps
  } = props;

  return (
    <Box data-testid={testID}>
      <Box mb={0.5}>
        <FATypography testID="typography-maps-label" variant="captionSemiBold">
          {label}{" "}
          {props.required && (
            <FATypography
              testID="typography-asterisk"
              color="error.main"
              component="span"
            >
              *
            </FATypography>
          )}
        </FATypography>
      </Box>
      <Box position="relative">
        <Backdrop open={true} sx={{ position: "absolute" }}>
          <FAButton
            testID="button-input-maps"
            {...(buttonIconName && {
              startIcon: (
                <FAIcon testID="icon-button" color="inherit">
                  {buttonIconName}
                </FAIcon>
              ),
            })}
            sx={{
              position: "absolute",
              height: "fit-content",
              width: "fit-content",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </FAButton>
        </Backdrop>

        <Box
          component="img"
          src={DEFAULT_IMAGE_MAPS_PLACEHOLDER}
          width="100%"
          height={200}
          sx={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box mt={1.5}>
        <FATextField
          {...textFieldProps}
          testID="input-maps"
          className="flex-textfield-no-label"
          variant={variant}
          fullWidth={fullWidth}
          multiline
        />
      </Box>
    </Box>
  );
});

FMMapsTextField.displayName = "FMMapsTextField";
