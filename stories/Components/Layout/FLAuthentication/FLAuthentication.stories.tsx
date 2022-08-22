import React from "react";
import { Meta, Story } from "@storybook/react";
import { FLAuthentication } from "@Components/Layout";
import { IFLAuthenticationProps } from "@Components/Layout/FLAuthentication/FLAuthentication.interface";

const meta: Meta = {
  title: "Layout/Authentication",
  component: FLAuthentication,
};

export default meta;

const Template: Story<IFLAuthenticationProps> = (
  props: IFLAuthenticationProps
) => <FLAuthentication {...props} />;

export const Authentication = Template.bind({});

Authentication.args = {
  testID: "layout-authentication-storybook",
  isCenter: true,
  header: {
    language: {
      value: "EN",
      onChange: () => console.log("dida"),
    },
    buttonLogin: {
      children: "Login",
      href: "/login",
    },
    buttonRegister: {
      children: "Register",
      href: "/register",
    },
    linkComponent: "a",
    logo: true,
  },
  children: "Children component",
  childrenGridWidth: 6,
};
