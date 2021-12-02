import { AppBarProps } from "@mui/material";

export interface IFOHeader extends AppBarProps {
  testID: `header-${string}`;
  search?: boolean;
  logout?: boolean;
  logo?: boolean;
  handleLogin?: any;
  handleRegister?: any;
  title?: string;
}
