import { useTranslation } from 'react-i18next';
import TitledSection from '@/common/components/Account/TitledSection';
import ObjectTable from '@/common/components/ObjectTable';
import { Box } from '@mui/material';
import useAddress from '@/common/modules/hooks/useAddress';

const DeliveryAddressSection = () => {
  const { t } = useTranslation();
  const { defaultAddress, defaultKeys } = useAddress();
  return defaultAddress ? (
    <TitledSection title={t('dashboard-3')}>
      <Box p={2}>
        <ObjectTable item={defaultAddress as any} keys={defaultKeys} />
      </Box>
    </TitledSection>
  ) : null;
};
export default DeliveryAddressSection;
