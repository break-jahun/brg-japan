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
  description: string;
}

function NewGradingScale() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const gradingScaleList = useMemo(
    () => [
      {
        id: 0,
        title: '10 GEM MINT',
        mobileTitle: '10',
        description: t('detail-40'),
      },
      {
        id: 1,
        title: '9 MINT',
        mobileTitle: '9',
        description: t('detail-41'),
      },
      {
        id: 2,
        title: '8.5 NM-MT+',
        mobileTitle: '8.5',
        description: t('detail-42'),
      },
      {
        id: 3,
        title: '8 NM-MT',
        mobileTitle: '8',
        description: t('detail-43'),
      },
      {
        id: 4,
        title: '7.5 NR MT+',
        mobileTitle: '7.5',
        description: t('detail-44'),
      },
      {
        id: 5,
        title: '7 NR MT',
        mobileTitle: '7',
        description: t('detail-45'),
      },
      {
        id: 6,
        title: '6.5 & 6 EX-NM',
        mobileTitle: '6.5 & 6',
        description: t('detail-46'),
      },
      {
        id: 7,
        title: '5.5 & 5 EX',
        mobileTitle: '5.5 & 5',
        description: t('detail-47'),
      },
      {
        id: 8,
        title: '4.5 & 4 VG-EX',
        mobileTitle: '4.5 & 4',
        description: t('detail-48'),
      },
      {
        id: 9,
        title: '3.5 & 3 VG',
        mobileTitle: '3.5 & 3',
        description: t('detail-49'),
      },
      {
        id: 10,
        title: '2.5 & 2 GOOD',
        mobileTitle: '2.5 & 2',
        description: t('detail-50'),
      },
      {
        id: 11,
        title: '1.5 & 1 FAIR',
        mobileTitle: '1.5 & 1',
        description: t('detail-51'),
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
          {t('detail-37')}
        </ResponsiveFamilyTypography>
        <Typography
          color="white"
          variant="body1"
          marginTop="16px"
          align="center"
          marginBottom={{ xs: '40px', sm: '24px' }}
        >
          {t('detail-38')}
        </Typography>

        <img
          alt="grading scale"
          src="/images/gradingIntroDetail/grading_scale.png"
          width="100%"
          style={{
            borderRadius: '8px',
          }}
        />

        <Typography
          variant="caption"
          color="white"
          align="center"
          marginTop="8px"
        >
          {t('detail-39')}
        </Typography>
        <GradeSelect
          grade={selectedGradeData.title}
          handleChange={handleChange}
          gradingScaleList={gradingScaleList}
        />
        <Box alignItems="flex-start">
          <Typography
            variant="h5"
            color="white"
            fontWeight={600}
            marginTop="24px"
          >
            {selectedGradeData.title}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            marginTop="24px"
            marginBottom="24px"
            minHeight={{ xs: '288px', sm: '144px' }}
            sx={{
              whiteSpace: 'pre-wrap',
            }}
          >
            {selectedGradeData.description}
          </Typography>
          <Typography variant="caption" color="gray_200">
            {t('detail-52')}
          </Typography>
        </Box>
      </Box>
    </SectionLayout>
  );
}

export default NewGradingScale;
