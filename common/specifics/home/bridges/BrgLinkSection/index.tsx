import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import Link from 'next/link';

interface BrgLinkSectionProps {
  logoSrc?: string;
  title?: any;
  description: any;
  buttonText: any;
  link: string;
}

function BrgLinkSection({
  logoSrc,
  title,
  description,
  buttonText,
  link,
}: BrgLinkSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box width={1} bgcolor="secondary_20" component="section">
      <MaxWidthLayoutBox>
        <Box
          width={1}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          margin={{ xs: 0, sm: '0 auto' }}
          padding={{ xs: '80px 16px', sm: '80px 32px' }}
          sx={{ maxWidth: { xs: '100%', sm: '768px' } }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: 'center', sm: 'flex-start' }}
            rowGap={{ xs: '16px', sm: '4px' }}
            sx={{ wordBreak: 'keep-all' }}
          >
            {logoSrc && (
              <img
                src={logoSrc}
                alt="logo"
                width="92px"
                style={{ marginBottom: '24px' }}
              />
            )}
            {title && (
              <Typography
                variant="h4"
                component="h2"
                align={isMobile ? 'center' : 'left'}
                color="white"
                fontWeight={600}
                marginBottom={!description ? { xs: '24px', sm: 0 } : 0}
              >
                {t(title)}
              </Typography>
            )}

            {description && (
              <Typography
                variant="body1"
                color="white"
                align={isMobile ? 'center' : 'left'}
                marginBottom={{ xs: '16px', sm: 0 }}
                fontWeight={500}
                sx={{
                  whiteSpace: { xs: 'pre-wrap', sm: 'nowrap' },
                }}
              >
                {t(description)}
              </Typography>
            )}
          </Box>

          <Link href={link} passHref>
            <GradingLinkButton>
              <Typography
                variant="button"
                marginRight={{ xs: '6px', sm: '4px' }}
                fontWeight={500}
              >
                {t(buttonText)}
              </Typography>
            </GradingLinkButton>
          </Link>
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default BrgLinkSection;

const GradingLinkButton = styled('button')(({ theme }) => ({
  width: 'max-content',
  backgroundColor: theme.palette.white,
  color: theme.palette.secondary_20,
  borderRadius: '28px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  padding: '10px 20px',

  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    paddingX: '24px',
  },
}));
