import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BrgCoreCompetenceLabelCard from './BrgCoreCompetenceLabelCard';

function BrgCoreCompetence() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const BRG_POINT_LIST = [
    {
      id: 1,
      title: t('grading-14'),
      labelNumber: 1,
      labelSerial: '0000001',
      description: t('grading-15'),
    },
    {
      id: 2,
      title: t('grading-16'),
      labelNumber: 2,
      labelSerial: '0000002',
      description: t('grading-17'),
    },
    {
      id: 3,
      title: t('grading-18'),
      labelNumber: 3,
      labelSerial: '0000003',
      description: t('grading-19'),
    },
    {
      id: 4,
      title: t('grading-20'),
      labelNumber: 4,
      labelSerial: '0000004',
      description: t('grading-21'),
    },
  ];

  return (
    <Box width={1} paddingY="80px" component="section">
      <MaxWidthLayoutBox>
        <Box>
          <ResponsiveFamilyTypography
            sx={{
              marginX: '16px',
            }}
            fontWeight={700}
            align="center"
            variant="h4"
            color="secondary_20"
          >
            {t('grading-13')}
          </ResponsiveFamilyTypography>
          <Box
            display="flex"
            flexDirection="column"
            rowGap="40px"
            padding={{ xs: '40px 0px', sm: '40px 32px' }}
          >
            {BRG_POINT_LIST.map((list) => (
              <Box
                key={list.id}
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent="center"
                alignItems="center"
                columnGap={{ xs: 0, sm: '16px' }}
                rowGap={{ xs: '16px', sm: 0 }}
                sx={{
                  wordBreak: 'break-all',
                }}
              >
                <BrgCoreCompetenceLabelCard
                  title={list.title}
                  labelNumber={list.labelNumber}
                  labelSerial={list.labelSerial}
                />
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  color="black"
                  marginX={{ xs: '16px', sm: 0 }}
                  width={{ xs: 'auto', sm: '420px' }}
                  height={{ xs: '60px', sm: '116px' }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {list.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default BrgCoreCompetence;
