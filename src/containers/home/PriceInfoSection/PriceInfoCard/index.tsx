import { VStack } from '@/common/components/VStack';
import { Box, Tooltip, Typography, styled } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Button, ClickAwayListener } from '@mui/base';
import { useState } from 'react';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import { HStack } from '@/common/components/HStack';

type Props = {
  title: string;
  price: string;
  description: React.ReactNode;
};

function PriceInfoCard(props: Props) {
  const { title, price, description } = props;

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const isDesktop = useIsDesktop();

  const handleClickTooltip = () => {
    setTooltipOpen((prev) => !prev);
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  return (
    <VStack
      padding="24px"
      gap="8px"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="8px"
      sx={{
        background: '#FFF',
        boxShadow: '0px 1px 3px 0px rgba(67, 61, 134, 0.30)',
      }}
      height="220px"
    >
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Subtitle>カード1枚あたり</Subtitle>
      <HStack alignItems="flex-end" gap="8px">
        {description}
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            title="営業日の起算時点は日本集荷地に到着した日時基準です。"
            disableFocusListener
            disableHoverListener
            disableTouchListener
            open={tooltipOpen}
          >
            <Button
              style={{ color: 'black' }}
              {...(isDesktop && {
                onMouseOver: handleTooltipOpen,
                onMouseLeave: handleTooltipClose,
              })}
              {...(!isDesktop && {
                onClick: handleClickTooltip,
              })}
            >
              <InfoIcon sx={{ color: '#d9d8d4' }} fontSize="small" />
            </Button>
          </Tooltip>
        </ClickAwayListener>
      </HStack>
    </VStack>
  );
}

const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 1.5,
});

const Price = styled(Typography)({
  color: '#00325B',
  fontWeight: 800,
  lineHeight: 1.625,
  letterSpacing: '0.25px',
  fontSize: '32px',
});

const Subtitle = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 1.6667,
  letterSpacing: '0.4px',
  color: '#616161',
});

export default PriceInfoCard;
