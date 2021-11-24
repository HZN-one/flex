import React, { memo } from 'react';
import { Chip, Avatar } from '@mui/material';
import { IFAChip } from './FAChip.interface';

export const FAChip = memo((props: IFAChip) => {
  const { testID, label, avatar, deleteable, ...materialUIProps } = props;
  return (
    <Chip
      avatar={avatar && <Avatar>{avatar}</Avatar>}
      label={label}
      data-testid={testID}
      deleteIcon={!deleteable ? <></> : <><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-deleteIcon MuiChip-deleteIconMedium MuiChip-deleteIconColorDefault MuiChip-deleteIconOutlinedColorDefault css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CancelIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg></>}
      {...materialUIProps}
    />
  );
});

FAChip.displayName = 'FAChip';
