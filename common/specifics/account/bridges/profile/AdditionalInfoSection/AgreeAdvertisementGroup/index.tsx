import { HStack } from '@/common/components/HStack';
import Switch from '@/common/components/Switch';
import usePatchAdvertisementAgreement from '@/common/modules/apiHooks/usePatchAdvertisementAgreement';
import useOpen from '@/common/modules/hooks/useOpen';
import AgreeAdvertisementDialog from '@/specifics/account/bridges/profile/AdditionalInfoSection/AgreeAdvertisementGroup/AgreeAdvertisementDialog';
import { styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  isAgreeAdvertisement: boolean;
}

function AgreeAdvertisementGroup({ isAgreeAdvertisement }: Props) {
  const { t } = useTranslation();

  const { open, handleOpen, handleClose } = useOpen();
  const [isChecked, setIsChecked] = useState(isAgreeAdvertisement);
  const { mutate } = usePatchAdvertisementAgreement();

  const handleToggleAgreement = () => {
    const isNewChecked = !isChecked;

    setIsChecked(isNewChecked);
    mutate(isNewChecked);
  };

  const handleAgreement = () => {
    setIsChecked(true);
    handleClose();
    mutate(true);
  };

  return (
    <>
      <HStack
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 16px',
        }}
      >
        <Typography variant="body2" fontWeight={600} color="black">
          {t('profile-54')}
        </Typography>
        <HStack gap="8px">
          <Button onClick={handleOpen}>
            <Typography color="gray_400" fontWeight={500} variant="button">
              {t('profile-55')}
            </Typography>
          </Button>
          <Switch
            isChecked={isChecked}
            onToggleAgreement={handleToggleAgreement}
          />
        </HStack>
      </HStack>
      <AgreeAdvertisementDialog
        isOpen={open}
        onClose={handleClose}
        onAgreement={handleAgreement}
      />
    </>
  );
}

const Button = styled('button')(({ theme }) => ({
  color: theme.palette.gray_400,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
}));

export default AgreeAdvertisementGroup;
