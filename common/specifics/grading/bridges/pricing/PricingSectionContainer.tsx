import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PricingCard from '@/specifics/grading/bridges/pricing/PricingCard';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

type PricingCardType = 'Express' | 'Regular' | 'Bulk' | 'Reholder';
export interface PricingCardItem {
  type: PricingCardType;
  price?: string;
  businessDays?: string;
  isComingSoon?: boolean;
}

interface Props {
  gradingServiceList: PricingCardItem[];
  etcServiceList: PricingCardItem[];
}

function PricingSectionContainer({
  gradingServiceList,
  etcServiceList,
}: Props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      p={{ xs: '80px 32px', sm: '160px 32px' }}
      sx={{ backgroundColor: 'gray_100' }}
    >
      <MaxWidthLayoutBox>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={{ xs: '24px', sm: '40px' }}
          mb="64px"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="8px"
          >
            <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={600}>
              {t('pricing-3')}
            </Typography>
            <Typography align="center" variant="caption" color="gray_700">
              {t('pricing-4')}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={{ xs: '24px', sm: '40px' }}
          >
            {gradingServiceList?.map((service) => (
              <PricingCard {...service} key={service.type} />
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="24px"
        >
          <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={600}>
            {t('pricing-7')}
          </Typography>
          {etcServiceList?.map((service) => (
            <PricingCard {...service} key={service.type} />
          ))}
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default PricingSectionContainer;
