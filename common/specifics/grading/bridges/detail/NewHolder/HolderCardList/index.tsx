import HolderCard from '@/specifics/grading/bridges/detail/NewHolder/HolderCardList/HolderCard';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HolderCardList = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '706px',
        flexFlow: 'wrap',
        justifyContent: 'center',
        gap: '26px',
        whiteSpace: 'break-spaces',
      }}
    >
      <HolderCard
        title={t('홀더슬라이더1타이틀')}
        desc={t('detail-22')}
        background="url(/images/gradingIntroDetail/holder_slide_1.jpg)"
      />
      <HolderCard
        title={t('홀더슬라이더2타이틀')}
        desc={t('detail-23')}
        background="url(/images/gradingIntroDetail/holder_slide_2.jpg)"
      />
      <HolderCard
        title={t('홀더슬라이더3타이틀')}
        desc={t('detail-24')}
        background="url(/images/gradingIntroDetail/holder_slide_3.jpg)"
      />
      <HolderCard
        title={t('홀더슬라이더4타이틀')}
        desc={t('detail-25')}
        background="url(/images/gradingIntroDetail/holder_slide_4.jpg)"
      />
    </Box>
  );
};

export default HolderCardList;
