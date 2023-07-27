import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { Box, styled, Typography } from '@mui/material';

import { ReactNode } from 'react';

interface Props {
  title: string;
  subTitle: string;
  button?: ReactNode;
  backgroundImage: string;
}

export const SliderItem = ({
  title,
  subTitle,
  button,
  backgroundImage,
}: Props) => {
  return (
    <SliderItemContainer
      sx={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.36)100%, rgba(0, 0, 0, 0.36)100%), url(${backgroundImage})`,
      }}
    >
      <MaxWidthLayoutBox
        sx={{
          width: { xs: '100%', sm: '100%' },
          display: 'flex',
          gap: '24px',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Typography fontWeight={600} variant="h4">
            {title}
          </Typography>
          <Typography variant="body1">{subTitle}</Typography>
        </Box>
        {button && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {button}
          </Box>
        )}
      </MaxWidthLayoutBox>
    </SliderItemContainer>
  );
};

const SliderItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  padding: '0 16px 88px',
  height: '640px',
  color: 'white',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  [theme.breakpoints.up('sm')]: {
    padding: '0 32px 88px',
  },
}));
