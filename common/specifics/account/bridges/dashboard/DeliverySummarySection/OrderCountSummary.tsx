import { CommonButton } from '@/common/components/Button';
import MediaQuery from '@/common/components/MediaQuery';
import { VStack } from '@/common/components/VStack';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface OrderCountSummaryType {
  title: string;
  count: number;
  handleClick?: () => void;
  isDisabled?: boolean;
}
const OrderCountSummary = ({
  title,
  count,
  handleClick,
  isDisabled,
}: OrderCountSummaryType) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <VStack textAlign="center" width={0.25}>
      <Typography variant={isMobile ? 'caption' : 'body2'} fontWeight={700}>
        {title}
      </Typography>
      <Box mt={1} mb={2}>
        <Typography variant="h3">{count}</Typography>
      </Box>
      <Box>
        <CommonButton
          buttonType="GRAY"
          disabled={isDisabled}
          onClick={handleClick}
        >
          {t('dashboard-2')}
        </CommonButton>
      </Box>
    </VStack>
  );
};

export default OrderCountSummary;
