import React, { memo } from "react";
import { Chip, Avatar } from "@mui/material";
import { IFAChipProps } from "./FAChip.interface";

export const FAChip = memo((props: IFAChipProps) => {
  const {
    testID,
    variant,
    color,
    label,
    avatar,
    onDelete,
    ...materialUIProps
  } = props;

  if (avatar) {
    return (
      <Chip
        avatar={<Avatar>{avatar}</Avatar>}
        label={label}
        data-testid={testID}
        onDelete={onDelete}
        variant={variant}
        color={color}
        {...materialUIProps}
      />
    );
  }

  return (
    <Chip
      label={label}
      data-testid={testID}
      onDelete={onDelete}
      variant={variant}
      color={color}
      {...materialUIProps}
    />
  );
});

FAChip.displayName = "FAChip";
