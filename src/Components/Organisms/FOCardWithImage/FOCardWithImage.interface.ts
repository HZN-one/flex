import { CardHeaderProps, CardProps } from "@mui/material";
import { ReactNode } from "react";

import { IFAButtonProps } from "../../Atoms/FAButton/FAButton.interface";
import { ElementPosition } from "../../../Types";

export interface IFOCardWithImageProps extends CardProps {
  testID: `card-image-${string}`;
  image?: ReactNode;
  imagePosition?: ElementPosition;
  header: Omit<CardHeaderProps, "sx">;
  buttonPrimary?: Omit<IFAButtonProps, "sx" | "testID">;
  buttonPrimaryPosition?: ElementPosition;
  buttonSecondary?: Omit<IFAButtonProps, "sx" | "testID">;
  buttonSecondaryPosition?: ElementPosition;
  control?: {
    label: string;
    isChecked: boolean;
  };
  actionEndAdornment?: ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
}
