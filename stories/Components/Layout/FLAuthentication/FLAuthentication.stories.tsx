import React from "react";
import { ComponentStory } from "@storybook/react";
import { FLAuthentication } from "@Components/Layout";
import { IFLAuthenticationProps } from "@Components/Layout/FLAuthentication/FLAuthentication.interface";

const story = {
  title: "Layout/Authentication",
  component: FLAuthentication,
};

export default story;

const Template: ComponentStory<typeof FLAuthentication> = (
  props: IFLAuthenticationProps
) => <FLAuthentication {...props} />;

export const Authentication = Template.bind({});

Authentication.args = {
  testID: "layout-authentication-storybook",
  isCenter: true,
  header: {
    buttonLogin: {
      children: "Login",
      href: "/login",
    },
    buttonRegister: {
      children: "Register",
      href: "/register",
    },
    linkComponent: "a",
  },
  children: "Children component",
  childrenGridWidth: 6,
};
