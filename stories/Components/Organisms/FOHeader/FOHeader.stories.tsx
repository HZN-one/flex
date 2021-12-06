import React from "react";
import { FOHeader } from "Components";
import { IFOHeader } from "Components/Organisms/FOHeader/FOHeader.interfaces";

const story = {
  title: "Header",
  component: FOHeader,
};

export default story;
export const Default = (props: IFOHeader) => (
  <>
    <FOHeader {...props}>{props.children}</FOHeader>
  </>
);
