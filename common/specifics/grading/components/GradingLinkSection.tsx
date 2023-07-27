import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useTranslation } from 'react-i18next';
import GradingLinkButton from '@/specifics/grading/components/GradingLinkButton';

interface GradingLinkSectionProps {
  title: string;
  description?: string;
  buttonText: string;
  link: string;
}

function GradingLinkSection({
  title,
  description,
  buttonText,
  link,
}: GradingLinkSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      width={1}
      paddingTop={{ xs: '64px', sm: '80px' }}
      paddingBottom="80px"
      bgcolor="secondary_20"
      component="section"
    >
      <MaxWidthLayoutBox>
        <Box
          width={{ xs: '100%', sm: '704px' }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          paddingX={{ xs: '16px', sm: 0 }}
          margin={{ xs: 0, sm: '0 auto' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="370px"
            rowGap={{ xs: '16px', sm: '4px' }}
          >
            <Typography
              variant="h4"
              component="h2"
              align={isMobile ? 'center' : 'left'}
              color="white"
              fontWeight={600}
              marginBottom={!description ? { xs: '24px', sm: 0 } : 0}
            >
              {title}
            </Typography>

            {description && (
              <Typography
                variant="body1"
                color="white"
                align={isMobile ? 'center' : 'left'}
                marginBottom={{ xs: '40px', sm: 0 }}
              >
                {description}
              </Typography>
            )}
          </Box>

          <GradingLinkButton link={link}>
            <Typography variant="button" fontWeight={500}>
              {buttonText}
            </Typography>
          </GradingLinkButton>
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default GradingLinkSection;
