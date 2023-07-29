import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';

type Props = {
  image: string;
  name: string;
  address: string;
  phone: string;
};

function PartnerShopInfoCard(props: Props) {
  const { image, name, address, phone } = props;

  return (
    <VStack
      width="100%"
      padding="24px 16px"
      height="328px"
      bgcolor="#F5F5F5"
      borderRadius="8px"
    >
      <VStack gap="19px" alignItems="center">
        <Image
          priority
          src={image}
          width={193}
          height={128}
          alt="partnershop image"
        />
        <VStack gap="8px" alignItems="center">
          <Name>{name}</Name>
          <Address>{address}</Address>
          <Phone>{phone}</Phone>
        </VStack>
      </VStack>
    </VStack>
  );
}

const Name = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  color: '#000',
  lineHeight: 1.5,
  letterSpacing: '0.5px',
});

const Address = styled(Typography)({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0.5px',
  textAlign: 'center',
});

const Phone = styled(Address)({});

export default PartnerShopInfoCard;
