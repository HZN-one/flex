import React from "react";

import {ButtonPegasus} from '../../../../src/Components/Atoms/Button'
import {IButton} from '../../../../src/Components/Atoms/Button/Button.interface'

const story = {
  component: ButtonPegasus,
  title: "Button",
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;
export const Default = (props: IButton) => (
  <>
    <ButtonPegasus {...props}>{props.children}</ButtonPegasus>
  </>
);