import React from "react";
import { FOHeader } from "@Organisms";
import { IFOHeaderProps } from "@Organisms/FOHeader/FOHeader.interface";

const story = {
  title: "Organisms/Header",
  component: FOHeader,
  argTypes: {
    testID: { control: "text" },
    position: { control: "text" },
    userAvatarSrc: { control: "text" },
    accountName: { control: "text" },
  },
  args: {
    testID: "header-storybook",
    position: "static",
    userAvatarSrc: "#",
    accountName: "Company Name",
  },
};

export default story;

export const Default = (props: IFOHeaderProps) => (
  <FOHeader {...props} logo position="static" headerType="default" />
);

export const DefaultWithTitle = (props: IFOHeaderProps) => (
  <FOHeader {...props} position="static" headerType="default" title="Title" />
);

export const DefaultWithSearch = (props: IFOHeaderProps) => (
  <FOHeader
    {...props}
    headerType="default"
    search={{
      placeholder: "Search",
    }}
  />
);

export const Auth = (props: IFOHeaderProps) => (
  <FOHeader
    {...props}
    logo
    headerType="auth"
    buttonLogin={{
      children: "Login",
      href: "/login",
    }}
    buttonRegister={{
      children: "Register",
      href: "/register",
    }}
    linkComponent="a"
  />
);
