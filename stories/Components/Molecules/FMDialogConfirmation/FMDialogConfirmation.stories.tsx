import React from "react";
import { Meta, Story } from "@storybook/react";

import { FAButton } from "@Atoms";
import { FMDialogConfirmation } from "@Molecules";

import { IFMDialogConfirmationProps } from "@Molecules/FMDialogConfirmation/FMDialogConfirmation.interface";

const meta: Meta = {
  title: "Molecules/Dialog Confirmation",
  component: FMDialogConfirmation,
};

export default meta;

const Template: Story<IFMDialogConfirmationProps> = (
  props: IFMDialogConfirmationProps
) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <FAButton testID="button-dialog" onClick={handleOpen}>
        Open Dialog
      </FAButton>
      <FMDialogConfirmation
        {...props}
        dialogProps={{
          open,
          onClose: handleClose,
        }}
        title="Change Status?"
        description='Are you sure you want to change status of this Administration to "Active"?'
      />
    </React.Fragment>
  );
};

export const Default = Template.bind({});

export const WithActions = Template.bind({});

WithActions.args = {
  onCancelProps: {
    children: "No, cancel",
  },
  onConfirmProps: {
    children: "Yes, confirm",
  },
};

export const WithCloseIconAndActions = Template.bind({});

WithCloseIconAndActions.args = {
  onCancelProps: {
    children: "Cancel",
  },
  onConfirmProps: {
    children: "Confirm",
  },
  onCloseIcon: () => console.log("hiha"),
};
