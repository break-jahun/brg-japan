/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from 'react';
import {
  Box,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import GradeSelect from '@/specifics/grading/bridges/GradingScale/GradeSelect';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

export interface GradingScaleListItemType {
  id: number;
  title: string;
  mobileTitle: string;
  description: string;
}

function GradingScale() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const gradingScaleList = useMemo(
    () => [
      {
        id: 0,
        title: '10 GEM MINT',
        mobileTitle: '10',
        description: t('스케일10'),
      },
      {
        id: 1,
        title: '9 MINT',
        mobileTitle: '9',
        description: t('스케일9'),
      },
      {
        id: 2,
        title: '8.5 NM-MT+',
        mobileTitle: '8.5',
        description: t('스케일8.5'),
      },
      {
        id: 3,
        title: '8 NM-MT',
        mobileTitle: '8',
        description: t('스케일8'),
      },
      {
        id: 5,
        title: '7 NR MT',
        mobileTitle: '7',
        description: t('스케일7'),
      },
      {
        id: 6,
        title: '6 EX-NM',
        mobileTitle: '6',
        description: t('스케일6'),
      },
      {
        id: 7,
        title: '5 EX',
        mobileTitle: '5',
        description: t('스케일5'),
      },
      {
        id: 8,
        title: '4 VG-EX',
        mobileTitle: '4',
        description: t('스케일4'),
      },
      {
        id: 9,
        title: '3 VG',
        mobileTitle: '3',
        description: t('스케일3'),
      },
      {
        id: 10,
        title: '2 GOOD',
        mobileTitle: '2',
        description: t('스케일2'),
      },
      {
        id: 11,
        title: '1 FAIR',
        mobileTitle: '1',
        description: t('스케일1'),
      },
    ],
    [t]
  );

  const [grade, setGrade] = useState('10 GEM MINT');

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
  };

  const selectedGradeData = gradingScaleList.find(
    (list) => list.title === grade
  ) as GradingScaleListItemType;

  return (
    <SectionLayout
      bgColor="secondary_10"
      sx={{ paddingTop: '80px', paddingBottom: { xs: '80px', sm: '160px' } }}
    >
      <Box
        width={{ xs: '100%', sm: '704px' }}
        paddingX={{ xs: '16px', sm: 0 }}
        margin={{ xs: 0, sm: '0 auto' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <ResponsiveFamilyTypography
          color="white"
          sx={{
            fontWeight: 600,
          }}
          variant={isMobile ? 'h4' : 'h3'}
        >
          {t('그레이딩스케일')}
        </ResponsiveFamilyTypography>
        <Typography
          color="white"
          variant="body1"
          marginTop="16px"
          align="center"
          marginBottom={{ xs: '40px', sm: '24px' }}
        >
          {t('brg등급설명')}
        </Typography>
        <img
          alt="grading scale"
          src="/images/gradingIntroDetail/grade_scale.png"
          width="100%"
        />
        <Typography
          variant="caption"
          color="white"
          align="center"
          marginTop="8px"
        >
          {t('brg등급방식')}
        </Typography>
        <GradeSelect
          grade={selectedGradeData.title}
          handleChange={handleChange}
          gradingScaleList={gradingScaleList}
        />
        <Box alignItems="flex-start">
          <Typography variant="subtitle1" color="white" marginTop="24px">
            {t('등급')}
          </Typography>
          <Typography variant="h5" color="white" fontWeight={600}>
            {selectedGradeData.title}
          </Typography>
          <Typography variant="subtitle1" color="white" marginTop="24px">
            {t('안내')}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            marginTop="4px"
            marginBottom="24px"
            minHeight={{ xs: '288px', sm: '144px' }}
            sx={{
              whiteSpace: 'pre-wrap',
            }}
          >
            {selectedGradeData.description}
          </Typography>
          <Typography variant="caption" color="gray_200">
            {t('카드상태설명')}
          </Typography>
        </Box>
      </Box>
    </SectionLayout>
  );
}

export default GradingScale;
