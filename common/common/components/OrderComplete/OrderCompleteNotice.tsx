import SummaryTableLayout from '@/common/components/SummaryTableLayout';
import { Box, styled, Typography } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';

interface OrderCompleteNoticeProps {
  memberName: string;
  fullNameType: string;
  term: number;
}

function OrderCompleteNotice(props: OrderCompleteNoticeProps) {
  const { memberName, fullNameType, term } = props;
  const { t } = useTranslation();

  return (
    <SummaryTableLayout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={1}
      >
        <Box display="flex" alignItems="baseline">
          <ResponsiveTypography sx={{ mr: 1 }}>
            {memberName}
          </ResponsiveTypography>
          <Typography
            variant="h5"
            align="center"
            fontWeight={700}
            color="#304ffe"
          >
            {fullNameType}
          </Typography>
          <ResponsiveTypography sx={{ ml: 1 }}>
            {t('grading/order/complete/ordered-this')}
          </ResponsiveTypography>
        </Box>
        <Box m={1}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="caption"
              align="center"
              sx={{ whiteSpace: 'pre-wrap' }}
            >
              <Trans
                i18nKey="orderComplete-2"
                components={{
                  strong: (
                    <Typography
                      fontWeight={700}
                      variant="caption"
                      component="span"
                    />
                  ),
                }}
                values={{ number: term }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </SummaryTableLayout>
  );
}

export default OrderCompleteNotice;

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  fontWeight: 500,
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
}));
