import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, SxProps, Theme, Typography } from '@mui/material';

interface Props {
  currentIndex: number;
  totalCount: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  isInfinity?: boolean;
  color?: string;
  position?: 'left' | 'center';
}

const SliderArrowButton = ({
  currentIndex,
  totalCount,
  handlePrevClick,
  handleNextClick,
  isInfinity,
  color,
  position = 'center',
  sx,
}: Props & { sx?: SxProps }) => {
  const arrowStyle: SxProps<Theme> =
    position === 'left'
      ? {
          // xs: 양쪽 16px + 16px 빼기
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          bottom: { xs: '24px', sm: '40px' },
          color: 'white',
          ...sx,
        }
      : {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          bottom: { xs: '12px', sm: '24px' },
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          ...sx,
        };

  return (
    <Box sx={{ ...arrowStyle }}>
      <ArrowBackIosNewRounded
        sx={{
          cursor: 'pointer',
          ...(!isInfinity && {
            opacity: currentIndex === 1 ? 0.24 : 1,
          }),
        }}
        onClick={handlePrevClick}
      />
      <Box sx={{ marginX: '4px' }}>
        <Typography color={color || 'gray_100'}>
          {currentIndex} / {totalCount}
        </Typography>
      </Box>
      <ArrowForwardIosRounded
        sx={{
          cursor: 'pointer',
          ...(!isInfinity && {
            opacity: currentIndex === totalCount ? 0.24 : 1,
          }),
        }}
        onClick={handleNextClick}
      />
    </Box>
  );
};

export default SliderArrowButton;
