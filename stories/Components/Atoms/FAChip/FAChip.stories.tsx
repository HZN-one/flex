import React from "react";
import { FAChip } from "@Atoms/FAChip";
import { IFAChipProps } from "@Atoms/FAChip/FAChip.interface";

const story = {
  title: "Atom/Chip",
  component: FAChip,
};

export default story;

export const Default = (props: IFAChipProps) => (
  <>
    <FAChip
      color="primary"
      label="Chip"
      size="medium"
      {...props}
      testID="chip-test"
    />
  </>
);

export const WithAvatar = (props: IFAChipProps) => (
  <>
    <FAChip
      color="primary"
      label="Chip"
      avatar={<>F</>}
      {...props}
      testID="chip-test"
    />
  </>
);

export const Removeable = (props: IFAChipProps) => (
  <>
    <FAChip
      color="primary"
      label="Chip"
      onDelete={() => console.log("delete")}
      {...props}
      testID="chip-test"
    />
  </>
);

export const ThumbnailRemoveable = (props: IFAChipProps) => (
  <>
    <FAChip
      color="primary"
      label="Chip"
      onDelete={() => console.log("delete")}
      {...props}
      testID="chip-test"
      avatar={<>F</>}
    />
  </>
);
