import { Typography } from '@mui/material';
import { VStack } from '@/common/components/VStack';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ShippingMethodLayout({ children }: Props) {
  const { t } = useTranslation();

  return (
    <VStack maxWidth={600} margin="auto">
      <VStack alignItems="center" mt={3}>
        <Typography variant="h6">{t('ShippingMethod-6')}</Typography>
        <Typography variant="caption">{t('ShippingMethod-7')}</Typography>
      </VStack>
      {children}
    </VStack>
  );
}

export default ShippingMethodLayout;
