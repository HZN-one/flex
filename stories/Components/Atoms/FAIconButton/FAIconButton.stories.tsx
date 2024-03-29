import React from "react";
import { FAIconButton } from "@Atoms/FAIconButton";
import { IFAIconButtonProps } from "@Atoms/FAIconButton/FAIconButton.interface";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const story = {
  title: "Atom/Icon Button",
  component: FAIconButton,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Naruto!",
  },
};

export default story;

export const Default = (props: IFAIconButtonProps) => (
  <>
    <FAIconButton {...props}>
      <MenuIcon />
    </FAIconButton>
    <FAIconButton {...props} color="error">
      <DeleteIcon />
    </FAIconButton>
    <FAIconButton {...props} color="success">
      <AlarmIcon />
    </FAIconButton>
    <FAIconButton {...props} color="primary">
      <AddShoppingCartIcon />
    </FAIconButton>
  </>
);
