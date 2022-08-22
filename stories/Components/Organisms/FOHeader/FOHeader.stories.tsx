import React from "react";
import { Meta, Story } from "@storybook/react";

import { FOHeader } from "@Organisms";
import { IFOHeaderProps } from "@Organisms/FOHeader/FOHeader.interface";

import { DUMMY_COMPANY_IMAGE_URL } from "@Definitions/constants";

const meta: Meta = {
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

export default meta;

const Template: Story<IFOHeaderProps> = props => <FOHeader {...props} />;

export const Default = Template.bind({});

Default.args = {
  position: "static",
  headerType: "default",
};

export const DefaultWithTitle = Template.bind({});

DefaultWithTitle.args = {
  position: "static",
  headerType: "default",
  title: "Title",
};

export const DefaultWithSearch = Template.bind({});

DefaultWithSearch.args = {
  headerType: "default",
  search: {
    placeholder: "Search",
  },
};

export const Auth = Template.bind({});

Auth.args = {
  headerType: "auth",
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
};

export const WithCustomLogo = Template.bind({});

WithCustomLogo.args = {
  headerType: "auth",
  companyLogo: (
    <img
      src={DUMMY_COMPANY_IMAGE_URL}
      style={{ width: "100%", objectFit: "contain", objectPosition: "left" }}
    />
  ),
  buttonLogin: {
    children: "Login",
    href: "/login",
  },
  buttonRegister: {
    children: "Register",
    href: "/register",
  },
  linkComponent: "a",
};

export const WithChangeLanguage = (props: IFOHeaderProps) => {
  const [language, setLanguage] = React.useState<"EN" | "ID">("EN");
  const handleChangeLanguage = (event: any) => {
    setLanguage(event.target.value);
  };
  return (
    <FOHeader
      {...props}
      buttonLogin={{
        children: "Login",
        href: "/login",
      }}
      buttonRegister={{
        children: "Register",
        href: "/register",
      }}
      linkComponent="a"
      logo={true}
      position="static"
      headerType="auth"
      language={{ value: language, onChange: handleChangeLanguage }}
    />
  );
};
