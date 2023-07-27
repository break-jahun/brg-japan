import { PricingCardItem } from '@/specifics/grading/bridges/pricing/PricingSectionContainer';
import { Box, Typography } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';

function PricingCard({
  type,
  price,
  businessDays,
  isComingSoon,
}: PricingCardItem) {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="8px"
      width="296px"
      height="220px"
      padding="24px"
      borderRadius="8px"
      boxShadow="0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"
      sx={{
        backgroundColor: 'white',
      }}
    >
      <Box display="flex" alignItems="baseline">
        <Typography variant="h5" color="black">
          {type}
        </Typography>
        {type === 'Bulk' && (
          <Typography
            variant="caption"
            color="rgba(0, 0, 0, 0.36)"
            marginLeft="4px"
          >
            beta
          </Typography>
        )}
      </Box>
      <Typography variant="h4" fontWeight={800} color="secondary_20">
        {isComingSoon ? 'Coming Soon' : price}
      </Typography>
      {!isComingSoon && (
        <>
          <Typography variant="caption" color="gray_700">
            {t('pricing-5')}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1px"
          >
            {type === 'Bulk' && <BulkMinimumOrderCountText />}
            <BusinessDaysText businessDays={businessDays as string} />
          </Box>
        </>
      )}
    </Box>
  );
}

function BulkMinimumOrderCountText() {
  const { t, i18n } = useTranslation();

  return (
    <Box display="flex">
      {i18n.language === 'en' && <Typography variant="caption">*</Typography>}
      <Typography variant="caption" fontWeight={600}>
        {t('벌크최소주문수량')}
      </Typography>
    </Box>
  );
}

function BusinessDaysText({ businessDays }: { businessDays: string }) {
  const { t, i18n } = useTranslation();
  const businessDaysText =
    i18n.language === 'ko' ? `${businessDays}일` : businessDays;

  return (
    <Box display="flex" gap={0.5}>
      <Trans
        i18nKey="pricing-6"
        components={{
          p: <Typography variant="caption" />,
          strong: <Typography variant="caption" fontWeight={600} />,
        }}
        values={{ 영업일: '15' }}
      />
    </Box>
  );
}

export default PricingCard;
