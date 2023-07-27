import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import GradingLinkButton from '@/specifics/grading/components/GradingLinkButton';

interface GradingLinkSectionWithLogoProps {
  description: string;
  buttonText: string;
  href: string;
  is768?: boolean;
}

function GradingLinkSectionWithLogo({
  description,
  buttonText,
  href,
  is768 = false,
}: GradingLinkSectionWithLogoProps) {
  return (
    <Box
      component="section"
      width={1}
      padding={{ xs: '64px 32px', sm: '80px 32px' }}
      bgcolor="secondary_20"
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        gap="40px"
        paddingX={{ xs: '16px', sm: 0 }}
        margin={{ xs: 0, sm: '0 auto' }}
        sx={{
          maxWidth: is768 ? '768px' : '1440px',
          margin: '0 auto',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          gap="40px"
        >
          <img
            src="/images/common/brg_logo_white.png"
            alt="logo"
            width="92px"
            height="40px"
          />
          <Typography
            variant="h6"
            fontWeight={500}
            color="white"
            align="center"
          >
            {description}
          </Typography>
        </Box>

        <GradingLinkButton link={href}>
          <Typography variant="button" fontWeight={500}>
            {buttonText}
          </Typography>
        </GradingLinkButton>
      </Box>
    </Box>
  );
}

export default GradingLinkSectionWithLogo;
