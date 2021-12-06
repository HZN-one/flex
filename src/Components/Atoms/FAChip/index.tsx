import React, { memo } from "react";
import { Chip, Avatar } from "@mui/material";
import { IFAChip } from "./FAChip.interface";

export const FAChip = memo((props: IFAChip) => {
  const { testID, variant, color, label, avatar, onDelete } = props;

  if (avatar) {
    return (
      <Chip
        avatar={<Avatar>{avatar}</Avatar>}
        label={label}
        data-testid={testID}
        onDelete={onDelete}
        variant={variant}
        color={color}
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
    />
  );
});

FAChip.displayName = "FAChip";
