import React, { memo } from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { FAIcon } from "@Atoms/FAIcon";

import { IFAButtonProps } from "./FAButton.interface";

export const FAButton = memo((props: IFAButtonProps) => {
  const { testID, isLoading, ...materialUIProps } = props;

  return (
    <>
      {!isLoading ? (
        <Button data-testid={testID} {...materialUIProps} />
      ) : (
        <LoadingButton
          loadingPosition="start"
          startIcon={<FAIcon testID="icon-save">loading</FAIcon>}
          loading
          {...materialUIProps}
        />
      )}
    </>
  );
});

FAButton.displayName = "FAButton";
