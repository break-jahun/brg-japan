import { useTranslation } from 'react-i18next';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import BenefitItem from '@/specifics/aboutUs/bridges/BrgBenefitListSection/BenefitItem';

const BrgBenefitListSection = () => {
  const { t } = useTranslation();
  const LIST = [t('brg베네핏설명1'), t('brg베네핏설명2'), t('brg베네핏설명3')];

  return (
    <MaxWidthLayoutBox
      sx={{
        paddingBottom: '160px',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: { xs: '80px', sm: '160px' },
        gap: { xs: '64px', sm: '40px' },
      }}
    >
      {LIST.map((desc, index) => (
        <BenefitItem description={desc} index={index} key={desc} />
      ))}
    </MaxWidthLayoutBox>
  );
};

export default BrgBenefitListSection;
