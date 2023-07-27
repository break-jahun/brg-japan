import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DifferentiatorCard from '@/specifics/aboutUs/bridges/BrgDifferentiatorsSection/DifferentiatorCard';

const NewBrgDifferentiatorsSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'secondary_20',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '80px 16px', sm: '80px 32px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '704px',
          rowGap: '40px',
          columnGap: '48px',
          flexFlow: 'wrap',
          wordBreak: 'normal',
        }}
      >
        <DifferentiatorCard title={t('about-6')} desc={t('about-7')} />
        <DifferentiatorCard title={t('about-8')} desc={t('about-9')} />
        <DifferentiatorCard title={t('about-10')} desc={t('about-11')} />
        <DifferentiatorCard title={t('about-12')} desc={t('about-13')} />
      </Box>
    </Box>
  );
};

export default NewBrgDifferentiatorsSection;
