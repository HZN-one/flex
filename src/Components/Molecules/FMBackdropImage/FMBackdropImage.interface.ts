import { BackdropProps } from "@mui/material";

export interface IFMBackdropImage extends BackdropProps {
  testID: `backdrop-image-${string}`;
  open: boolean;
  handleClose: () => void;
}
