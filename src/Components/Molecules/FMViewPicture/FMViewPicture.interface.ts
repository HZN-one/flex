import { IFAAvatarProps } from "@Atoms/FAAvatar/FAAvatar.interface";
import { IFAButtonProps } from "@Atoms/FAButton/FAButton.interface";

export interface IFMViewPicture {
  testID: `view-picture-${string}`;
  label: string;
  img: {
    src: string;
    alt: string;
  };
  avatar?: Omit<IFAAvatarProps, "testID">;
  button?: Omit<
    IFAButtonProps,
    "testID" | "variant" | "color" | "size" | "onClick"
  >;
}
