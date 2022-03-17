import React, { memo } from "react";
import { Box, Button, Stack } from "@mui/material";

import { FAAvatar } from "@Atoms/FAAvatar";
import { FATypography } from "@Atoms/FATypography";

import { DEFAULT_IMAGE_INPUT_AVATAR } from "@Definitions/constants";

import { IFMInputAvatar } from "./FMInputAvatar.interface";

export const FMInputAvatar = memo((props: IFMInputAvatar) => {
  const { testID, srcPhoto, buttonLabel, infoText, onChange, acceptInput } =
    props;
  return (
    <Box
      mt={2}
      display="flex"
      alignItems="center"
      mb={1.875}
      data-testid={testID}
    >
      <FAAvatar
        testID="avatar-company-logo"
        sx={{ mr: 3, width: "90px", height: "90px" }}
        src={srcPhoto || DEFAULT_IMAGE_INPUT_AVATAR}
      />
      <Stack spacing={2} width="100%" maxWidth={316}>
        <FATypography
          testID="typography-upload-company-logo"
          variant="caption"
          aria-labelledby="upload-company-logo-id"
        >
          {infoText}
        </FATypography>

        <label>
          <input accept={acceptInput} type="file" hidden onChange={onChange} />
          <Button
            variant="outlined"
            color="secondary"
            component="span"
            size="small"
          >
            {buttonLabel}
          </Button>
        </label>
      </Stack>
    </Box>
  );
});

FMInputAvatar.displayName = "FMInputAvatar";
