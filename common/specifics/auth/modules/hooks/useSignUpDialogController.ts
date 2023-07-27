import { useState, useCallback } from 'react';
import { DialogKey, DialogType } from '@/specifics/auth/modules/types/signup';
import { UseFormSetValue } from 'react-hook-form';
import { SignUpFormDefaultType } from '@/common/types/user/auth';

interface useSignUpDialogControllerProps {
  setValue: UseFormSetValue<SignUpFormDefaultType>;
}

function useSignUpDialogController({
  setValue,
}: useSignUpDialogControllerProps) {
  const [dialogList, setDialogList] = useState<DialogType>({
    checkAgreement: false,
    checkPrivacy: false,
    isAgreedOver14: false,
  });

  const onClickDialogOpen = useCallback(
    (modalKey: DialogKey) => () => {
      setDialogList((prev) => ({ ...prev, [modalKey]: true }));
    },
    []
  );

  const onCloseWithoutAgreement = useCallback(
    (modalKey: DialogKey) => () => {
      setDialogList((prev) => ({ ...prev, [modalKey]: false }));
    },
    []
  );

  const onClickAgreement = useCallback(
    (modalKey: DialogKey) => () => {
      setValue(modalKey, true);
      setDialogList((prev) => ({ ...prev, [modalKey]: false }));
    },
    [setValue]
  );

  return {
    dialogList,
    onClickDialogOpen,
    onCloseWithoutAgreement,
    onClickAgreement,
  };
}

export default useSignUpDialogController;
