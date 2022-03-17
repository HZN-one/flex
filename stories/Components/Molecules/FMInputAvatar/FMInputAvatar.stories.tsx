import React from "react";
import { FMInputAvatar } from "@Molecules";
import { IFMInputAvatar } from "@Molecules/FMInputAvatar/FMInputAvatar.interface";

const story = {
  title: "Molecules/Input Avatar",
  component: FMInputAvatar,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    testID: "input-avatar-test",
    infoText:
      "minimum image size 100 x 100 (max. 200 Kb). extention file must be in .PNG",
    buttonLabel: "Upload Company Logo",
    acceptInput: "image/*",
  } as IFMInputAvatar,
};

export default story;

export const Default = (props: IFMInputAvatar) => (
  <>
    <FMInputAvatar {...props} />
  </>
);
