import { VStack } from '@/common/components/VStack';
import { Box, Tooltip, Typography, styled } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Button, ClickAwayListener } from '@mui/base';
import { useState } from 'react';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';

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
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          title="営業日の起算時点は、グレーディングセンターに到着した日ではなく、
        「日本現地集荷地（もしくは事務所）」に到着した日を基準とします。"
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
            {description}
          </Button>
        </Tooltip>
      </ClickAwayListener>
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
