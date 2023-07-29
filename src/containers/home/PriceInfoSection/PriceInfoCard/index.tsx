import { VStack } from '@/common/components/VStack';
import { Typography, styled } from '@mui/material';

type Props = {
  title: string;
  price: string;
  description: React.ReactNode;
};

function PriceInfoCard(props: Props) {
  const { title, price, description } = props;

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
      {description}
    </VStack>
  );
}

const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 400,
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
});

export default PriceInfoCard;
