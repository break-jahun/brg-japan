import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import NewsItem from '@/specifics/home/bridges/NewsSection/NewsItem';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

export interface News {
  src: string;
  title: string;
  content: string;
  publishedAt: string;
  link: string;
}

interface NewsSectionProps {
  newsList: News[];
}

const NewsSection = ({ newsList }: NewsSectionProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        paddingY: { xs: '64px', sm: '160px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <StyledImg src="/images/common/brg_logo_color.png" />
        <ResponsiveFamilyTypography
          variant={isMobile ? 'h4' : 'h3'}
          fontWeight={600}
          color="secondary_20"
        >
          {t('뉴스')}
        </ResponsiveFamilyTypography>
      </Box>
      <NewsItems newsList={newsList} />
    </Box>
  );
};

export default NewsSection;

const StyledImg = styled('img')(({ theme }) => ({
  width: '80px',
  marginRight: '4px',

  [theme.breakpoints.up('sm')]: {
    width: '144px',
    marginRight: '16px',
  },
}));

const NewsItems = ({ newsList }: { newsList: News[] }) => {
  const isWideDesktop = useMediaQuery('(min-width:1440px)');

  if (!isWideDesktop) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {newsList.map((news) => (
          <NewsItem
            key={news.title}
            src={news.src}
            title={news.title}
            content={news.content}
            publishedAt={news.publishedAt}
            link={news.link}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/common/brg_news_background_wide.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MaxWidthLayoutBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingX: { sm: '32px' },
        }}
      >
        {newsList.map((news) => (
          <NewsItem
            key={news.title}
            src={news.src}
            title={news.title}
            content={news.content}
            publishedAt={news.publishedAt}
            link={news.link}
          />
        ))}
      </MaxWidthLayoutBox>
    </Box>
  );
};
