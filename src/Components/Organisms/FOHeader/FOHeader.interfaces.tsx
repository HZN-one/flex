import { AppBarProps } from "@mui/material";

export interface IFOHeader extends AppBarProps {
  testID: `header-${string}`;
  logout?: boolean;
  logo?: boolean;
  handleLogin?: any;
  handleRegister?: any;
  title?: string;
}
