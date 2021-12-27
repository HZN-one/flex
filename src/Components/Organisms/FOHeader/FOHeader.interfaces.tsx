import { AppBarProps } from "@mui/material";
import { ReactChild } from "react";

export interface IFOHeader extends AppBarProps {
  testID: `header-${string}`;
  search?: boolean;
  logout?: boolean;
  logo?: ReactChild;
  handleLogin?: () => void;
  handleSearch?: () => void;
  handleMenuIcon?: () => void;
  handleRegister?: () => void;
  title?: string;
  menuIcon?: boolean;
  endAdornment?: ReactChild;
  startAdornment?: ReactChild;
}
