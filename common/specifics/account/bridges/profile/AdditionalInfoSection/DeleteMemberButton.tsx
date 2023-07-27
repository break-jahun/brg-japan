import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CommonButton } from '@/common/components/Button';
import { useDeleteMemberMutation } from '@/specifics/account/modules/apihooks/useDeleteMemberMutation';

const useDeleteMemberParser = () => {
  const { t } = useTranslation();
  const text = {
    buttonText: t('profile-56'),
    confirmText: t('profile-57'),
  };

  const { mutate: deleteMemberMutate } = useDeleteMemberMutation();

  const handleDeleteMember = () => {
    if (window.confirm(text.confirmText)) {
      deleteMemberMutate({});
    }
  };

  return {
    buttonText: text.buttonText,
    handleDeleteMember,
  };
};

function DeleteMemberButton() {
  const { buttonText, handleDeleteMember } = useDeleteMemberParser();

  return (
    <Box textAlign="center">
      <CommonButton
        buttonType="OUTLINED"
        style={{ padding: '5px' }}
        onClick={handleDeleteMember}
      >
        {buttonText}
      </CommonButton>
    </Box>
  );
}

export default DeleteMemberButton;
