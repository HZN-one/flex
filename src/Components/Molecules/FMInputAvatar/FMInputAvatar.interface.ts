export interface IFMInputAvatar {
  testID: `input-avatar-${string}`;
  srcPhoto?: string;
  buttonLabel?: string;
  infoText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  acceptInput?: string;
}
