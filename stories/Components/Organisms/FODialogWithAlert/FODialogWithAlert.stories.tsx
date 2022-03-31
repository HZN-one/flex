import React from "react";
import { Meta, Story } from "@storybook/react";

import { FAButton } from "@Atoms";
import { FODialogWithAlert } from "@Organisms";

import { IFODialogWithAlertProps } from "@Organisms/FODialogWithAlert/FODialogWithAlert.interface";

const meta: Meta = {
  title: "Organisms/Dialog With Alert",
  component: FODialogWithAlert,
};

export default meta;

const Template: Story<IFODialogWithAlertProps> = (
  props: IFODialogWithAlertProps
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
      <FODialogWithAlert
        {...props}
        dialogProps={{
          open,
          onClose: handleClose,
        }}
        icon="error"
        onCloseIcon={handleClose}
        title="Failed Generating Invoice"
      >
        Please check{" "}
        <strong>
          Order ID [<a href="#">ORD000021</a>]
        </strong>
        . Make sure the order has been completed and upload the Proof of
        Delivery.
      </FODialogWithAlert>
    </React.Fragment>
  );
};

export const Default = Template.bind({});
