import { SignUpFormDefaultType } from '@/common/types/user/auth';

export type DialogKey = keyof Pick<
  SignUpFormDefaultType,
  'checkAgreement' | 'checkPrivacy' | 'isAgreedOver14'
>;

export type DialogType = {
  [key in DialogKey]: boolean;
};
