import { Typography } from '@mui/material';
import { VStack } from '@/common/components/VStack';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { gradingOrderItemsState } from '@/common/modules/recoil/gradingOrder';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';

function OrderInformation() {
  const { t } = useTranslation();

  const gradingOrderItems = useRecoilValue(gradingOrderItemsState);

  const { data } = useGetUserInfoQuery();

  return (
    <VStack justifyContent="space-around" height="100%">
      <VStack alignItems="center">
        <Typography variant="caption">{t('submit-65')}</Typography>
        <Typography variant="h2">{gradingOrderItems.length}</Typography>
      </VStack>
      <VStack alignItems="center">
        <Typography variant="body2" fontWeight={700}>
          {t('submit-66')}
        </Typography>
        <Typography variant="caption">{data?.mbName}</Typography>
      </VStack>
    </VStack>
  );
}

export default OrderInformation;
