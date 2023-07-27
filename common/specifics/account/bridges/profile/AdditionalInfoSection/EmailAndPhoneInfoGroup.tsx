import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import PhoneNumberAuthenticationModal from '@/common/bridges/PhoneAuthenticationModal';
import { CommonButton } from '@/common/components/Button';
import ObjectTable from '@/common/components/ObjectTable';
import useObjectTable from '@/common/components/ObjectTable/useObjectTable';
import useOpen from '@/common/modules/hooks/useOpen';

interface MbInfo {
  name: string;
  email: string;
  phone: string;
}

interface EmailAndPhoneInfoGroupProps {
  mbInfo: MbInfo;
}

function EmailAndPhoneInfoGroupParser(mbInfo: MbInfo) {
  const { t } = useTranslation();
  const buttonText = t('account/profile/change-phone-number');

  const { open: isOpen, handleOpen, handleClose } = useOpen();

  const { item: mbItem, keys: mbKeys } = useObjectTable({
    item: {
      name: mbInfo.name,
      email: mbInfo.email,
      phone: mbInfo.phone,
    },
    keys: [
      {
        text: t('general/name'),
        value: 'name',
      },
      {
        text: t('general/email'),
        value: 'email',
      },
      {
        text: t('general/phone-number'),
        value: 'phone',
      },
    ],
  });

  return {
    buttonText,
    isOpen,
    handleOpen,
    handleClose,
    mbItem,
    mbKeys,
  };
}

function EmailAndPhoneInfoGroup({ mbInfo }: EmailAndPhoneInfoGroupProps) {
  const { buttonText, mbItem, mbKeys, handleOpen, isOpen, handleClose } =
    EmailAndPhoneInfoGroupParser(mbInfo);

  return (
    <Box p={2}>
      <ObjectTable item={mbItem} keys={mbKeys} />
      <Box mt={1}>
        <CommonButton buttonType="GRAY" fullWidth onClick={handleOpen}>
          {buttonText}
        </CommonButton>
      </Box>
      <PhoneNumberAuthenticationModal
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </Box>
  );
}
export default EmailAndPhoneInfoGroup;
