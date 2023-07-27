import { Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Feed from '@/specifics/community/bridges/instagram/FeedContent';
import { color } from '@/styles/styles';
import TitleSection from '@/specifics/community/components/TitleSection';

function InstaSection() {
  const { t } = useTranslation();

  return (
    <InstaContainer>
      <TitleSection
        title="brg Instagram"
        summary={t('community/description-instagram')}
      />

      <ContentSection>
        <Feed
          title="#brg grading"
          titleColor={color.primary.main}
          subTitle="모음"
          src="https://snapwidget.com/embed/976196"
          isScrollable
        />
        <FeedDivider />
        <Feed
          title={t('community/feed-instagram')}
          titleColor="#000"
          src="https://snapwidget.com/embed/976232"
          isScrollable={false}
        />
      </ContentSection>
    </InstaContainer>
  );
}

export default InstaSection;

const InstaContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '1000px',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: '15px',
  },
}));

const FeedDivider = styled(Box)(({ theme }) => ({
  width: '300px',
  borderTop: '1px solid #707070',

  [theme.breakpoints.up('sm')]: {
    borderTop: '0',
    borderLeft: '1px solid #707070',
    height: '300px',
    width: 0,
  },
}));
