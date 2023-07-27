import { Box, keyframes, SxProps } from '@mui/material';
import { ReactChild, ReactNode } from 'react';

interface Props {
  children: ReactChild[];
  containerProps?: SxProps;
  speed?: number;
  itemWidth: number;
}

const InfinitySlider = ({
  children,
  containerProps,
  itemWidth,
  speed = 70,
}: Props) => {
  const containerWidth = itemWidth * children.length;
  const duration = containerWidth / speed;

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        ...containerProps,
      }}
    >
      <Box
        sx={{
          width: 'max-content',
          position: 'relative',
          animation: `${slideAnimation} ${duration}s linear infinite`,
          display: 'flex',
        }}
      >
        <Box sx={{ display: 'flex', WebkitTransform: 'translateZ(0)' }}>
          {children}
        </Box>
        <Box sx={{ display: 'flex', WebkitTransform: 'translateZ(0)' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default InfinitySlider;

const slideAnimation = keyframes`
  0% { 
    transform: translateX(0);
  }
  100% { 
    transform: translateX(-50%);
    }
`;
