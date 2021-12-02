import React from "react";
import { FAChip } from "../../../../src/Components/Atoms/FAChip";

const story = {
  title: "Chip",
  component: FAChip,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;

export const Default = () => (
  <>
    <FAChip
      testID="chip-test"
      color="default"
      // {...props}
      label="test"
      sx={{ marginRight: "1vw", marginBottom: "1vh" }}
    />
    <FAChip
      testID="chip-test"
      color="primary"
      label="test"
      onDelete={console.log("ew")}
      // {...props}
      sx={{ marginRight: "1vw", marginBottom: "1vh" }}
    />
  </>
);

export const WithAvatar = () => (
  <>
    <FAChip
      testID="chip-test"
      color="default"
      // {...props}
      label="test"
      avatar={<>s</>}
      sx={{ marginRight: "1vw", marginBottom: "1vh" }}
    />
    <FAChip
      testID="chip-test"
      color="primary"
      label="test"
      // {...props}
      avatar={<>s</>}
      sx={{ marginRight: "1vw", marginBottom: "1vh" }}
    />
  </>
);

export const Deleteable = () => (
  <>
    <FAChip
      testID="chip-test"
      color="default"
      // {...props}
      label="test"
      sx={{ marginRight: "1vw", marginBottom: "1vh" }}
      onDelete={() => console.log("delete")}
    />
    <FAChip
      testID="chip-test"
      color="primary"
      label="test"
      onDelete={() => console.log("delete")}
      // {...props}
      sx={{ marginRight: "1vw", marginBottom: "1vh" }}
    />
  </>
);
