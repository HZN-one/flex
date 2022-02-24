import React from "react";
import { FOHeader } from "@Organisms";
import { IFOHeader } from "@Organisms/FOHeader/FOHeader.interface";

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

export const Default = (props: IFOHeader) => (
  <FOHeader {...props} logo position="static" headerType="default" />
);

export const DefaultWithTitle = (props: IFOHeader) => (
  <FOHeader {...props} position="static" headerType="default" title="Title" />
);

export const DefaultWithSearch = (props: IFOHeader) => (
  <FOHeader
    {...props}
    headerType="default"
    search={{
      placeholder: "Search",
    }}
  />
);

export const Auth = (props: IFOHeader) => (
  <FOHeader
    {...props}
    logo
    headerType="auth"
    buttonLogin={{
      children: "Login",
      href: "/login",
      LinkComponent: "a",
    }}
    buttonRegister={{
      children: "Register",
      href: "/register",
      LinkComponent: "a",
    }}
  />
);
