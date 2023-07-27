import { useTranslation } from 'react-i18next';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import BenefitItem from '@/specifics/aboutUs/bridges/BrgBenefitListSection/BenefitItem';
import { useMediaQuery, useTheme } from '@mui/material';

const NewBrgBenefitListSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t, i18n } = useTranslation();

  const getText = (index: number) => {
    if (i18n.language !== 'ko') {
      return t(`brg베네핏설명${index}` as any);
    }

    if (isMobile) {
      return t(`brg베네핏설명${index}모바일` as any);
    }

    return t(`brg베네핏설명${index}데탑` as any);
  };

  const LIST = [t('about-3'), t('about-4'), t('about-5')];

  return (
    <MaxWidthLayoutBox
      sx={{
        display: 'flex',
        flexDirection: 'column',
        whiteSpace: 'break-spaces',
        paddingY: '80px',
        gap: '40px',
      }}
    >
      {LIST.map((desc, index) => (
        <BenefitItem description={desc} index={index} key={desc} />
      ))}
    </MaxWidthLayoutBox>
  );
};

export default NewBrgBenefitListSection;
