import { VStack } from '@/common/components/VStack';
import { Typography, Button, styled, Box, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState, memo } from 'react';

const OrderDescription = () => {
  const { t } = useTranslation();

  const [showDetailSeeModal, setShowDetailSeeModal] = useState(false);

  const handleClick = () => {
    setShowDetailSeeModal(true);
  };

  const handleClose = () => {
    setShowDetailSeeModal(false);
  };

  return (
    <>
      <VStack alignItems="center">
        <Description color="red" fontWeight="700" variant="caption">
          {t('temporary-storage/notice-1')}
        </Description>
        <Description variant="caption">
          {t('temporary-storage/notice-2')}
        </Description>
        <Description variant="caption">{t('grading/submit/size2')}</Description>
        <DetailSeeButton variant="text" onClick={handleClick}>
          {t('grading/order/detail')}
        </DetailSeeButton>
      </VStack>
      {/* <Modal open={showDetailSeeModal} onClose={handleClose}>
        <KrSizeInformation onClose={handleClose} />
      </Modal> */}
    </>
  );
};

export default memo(OrderDescription);

const Description = styled(Typography)({
  fontWeight: 700,
  color: 'red',
});

const DetailSeeButton = styled(Button)({
  color: '#304ffe',
  letterSpacing: 1,
  textDecoration: 'underline',
  ':hover': {
    background: 'none',
    textDecoration: 'underline',
  },
});
