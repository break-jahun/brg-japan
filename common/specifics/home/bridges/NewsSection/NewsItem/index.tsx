import { Box, styled, Typography } from '@mui/material';
import NewsItemLayout from '@/specifics/home/bridges/NewsSection/NewsItem/NewsItemLayout';
import { useTranslation } from 'react-i18next';

interface Props {
  src: string;
  title: string;
  content: string;
  publishedAt: string;
  link: string;
}

const NewsItem = ({ src, title, content, publishedAt, link }: Props) => {
  const { t } = useTranslation();

  return (
    <NewsItemLayout>
      <Box
        sx={{
          padding: { xs: '16px 16px 32px', sm: '24px 32px' },
          display: { sm: 'flex' },
          gap: { sm: '24px' },
        }}
      >
        <Box
          sx={({ palette }) => ({
            flexBasis: { sm: '50%' },
            borderRadius: '8px',
            border: `1px solid ${palette.gray_400}`,
            overflow: 'hidden',
          })}
        >
          <StyledImg src={src} />
        </Box>
        <Box
          sx={{
            marginTop: { xs: '16px', sm: '0' },
            flexBasis: { sm: '50%' },
          }}
        >
          <Box
            sx={{
              marginBottom: {
                xs: '16px',
                sm: '8px',
              },
              height: { sm: '108px' },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '24px' },
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              height: { sm: '176px' },
            }}
          >
            <NewsContents>{content}</NewsContents>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '8px',
            }}
          >
            <Typography fontSize="12px" color="gray_800">
              {publishedAt}
            </Typography>
            <a href={link} target="_blank" rel="noreferrer">
              <MoreButton>{t('더보기2')}</MoreButton>
            </a>
          </Box>
        </Box>
      </Box>
    </NewsItemLayout>
  );
};

export default NewsItem;

const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '240px',
  objectFit: 'cover',
  objectPosition: 'center',

  [theme.breakpoints.up('sm')]: {
    display: 'block',
    width: '100%',
    height: '340px',
  },
}));

const NewsContents = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 10,
  WebkitBoxOrient: 'vertical',

  [theme.breakpoints.up('sm')]: {
    WebkitLineClamp: 8,
  },
}));

const MoreButton = styled(Box)(({ theme }) => ({
  padding: '6px 12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: `${theme.palette.secondary_20}`,
  border: `1px solid ${theme.palette.secondary_20}`,
  borderRadius: '28px',
  fontWeight: '500',
  fontSize: '12px',

  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    padding: '10px 12.5px',
  },
}));
