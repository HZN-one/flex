import { ReactChild } from "react";
import { IFAAvatarProps } from "../../Atoms/FAAvatar/FAAvatar.interface";
import { IFAButtonProps } from "../../Atoms/FAButton/FAButton.interface";

export interface IFMViewPicture {
  testID: `view-picture-${string}`;
  label: string;
  children: ReactChild;
  avatar?: Omit<IFAAvatarProps, "testID">;
  button?: Omit<
    IFAButtonProps,
    "testID" | "variant" | "color" | "size" | "onClick"
  >;
}
