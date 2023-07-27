import { HStack } from '@/common/components/HStack';
import { Box, IconButton, Typography, styled } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/base';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';

type Props = {
  total: number;
  current: number;
  onMovePage: (index: number) => void;
};

function BannerSliderPagination(props: Props) {
  const { total, current, onMovePage } = props;

  const isDesktop = useIsDesktop();

  const leftDisabled = current === 0;
  const rightDisabled = current + 1 === total;

  const handleClickLeft = () => {
    if (!leftDisabled) {
      onMovePage(current - 1);
    }
  };

  const handleClickRight = () => {
    if (!rightDisabled) {
      onMovePage(current + 1);
    }
  };

  return (
    <HStack
      position="absolute"
      bottom={{ xs: '0px', sm: '20px' }}
      left="50%"
      sx={{ transform: 'translate(-50%, 0%)' }}
      width="calc(100vw * 0.615)"
      zIndex={100}
      justifyContent={{ xs: 'center', sm: 'flex-end' }}
    >
      <HStack color="white" alignItems="center">
        <ArrowButton disabled={leftDisabled} onClick={handleClickLeft}>
          <KeyboardArrowLeftIcon fontSize={isDesktop ? 'large' : 'medium'} />
        </ArrowButton>
        <PageText>{`${current + 1} / ${total}`}</PageText>
        <ArrowButton disabled={rightDisabled} onClick={handleClickRight}>
          <KeyboardArrowRightIcon fontSize={isDesktop ? 'large' : 'medium'} />
        </ArrowButton>
      </HStack>
    </HStack>
  );
}

const PageText = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
  },
}));

const ArrowButton = styled(Button)<{ disabled?: boolean }>(
  ({ disabled = false }) => ({
    color: '#FFFFFF',
    ...(disabled && {
      color: '#D9D9D9',
      opacity: 0.5,
    }),
  })
);

export default BannerSliderPagination;
