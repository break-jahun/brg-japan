import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUsMainSection from '@/specifics/aboutUs/bridges/AboutUsMainSection';
import CommonTradingCardGuideSection from '@/specifics/aboutUs/bridges/TradingCardGuideSection';
import CommonBrgBenefitListSection from '@/specifics/aboutUs/bridges/BrgBenefitListSection';
import CommonBrgDifferentiatorsSection from '@/specifics/aboutUs/bridges/BrgDifferentiatorsSection';
import HostedEvent from '@/common/bridges/HostedEvent';
import NewsSection from 'brg-japan/common/bridges/JapanNewsSection';
import CommonContactUs from '@/common/bridges/ContactUs';

const AboutUsPage = () => {
  return (
    <Box
      sx={{
        wordBreak: 'break-word',
        whiteSpace: 'break-spaces',
      }}
    >
      <AboutUsMainSection />
      <CommonTradingCardGuideSection />
      <CommonBrgBenefitListSection />
      <CommonBrgDifferentiatorsSection />
      <HostedEvent />
      <CommonContactUs />
    </Box>
  );
};

export default AboutUsPage;
