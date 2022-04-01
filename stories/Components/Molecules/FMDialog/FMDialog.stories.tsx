import React from "react";
import { Meta, Story } from "@storybook/react";

import { FAButton } from "@Atoms";
import { FMDialog } from "@Molecules";

import { IFMDialogProps } from "@Molecules/FMDialog/FMDialog.interface";

const meta: Meta = {
  title: "Molecules/Dialog",
  component: FMDialog,
};

export default meta;

const Template: Story<IFMDialogProps> = (props: IFMDialogProps) => {
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
      <FMDialog
        {...props}
        dialogProps={{
          open,
          onClose: handleClose,
        }}
      >
        All detail of each invoice will be generated as one file. You can
        download after the generating process has complete.
      </FMDialog>
    </React.Fragment>
  );
};

export const Default = Template.bind({});

export const WithTitleAndActions = Template.bind({});

WithTitleAndActions.args = {
  actionsProps: {
    children: (
      <FAButton testID="button-dialog" size="small">
        Generate Invoice
      </FAButton>
    ),
  },
  titleProps: {
    children: "Are you sure you want to generate these invoice?",
  },
};
