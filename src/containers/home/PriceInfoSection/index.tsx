import { VStack } from '@/common/components/VStack';
import HomeSharedTitle from 'brg-japan/containers/home/shared/HomeSharedTitle';

function PriceInfoSection() {
  return (
    <VStack paddingY="80px" bgcolor="#F5F5F5" alignItems="center">
      <VStack gap="24px" maxWidth="632px">
        <HomeSharedTitle>プライシング</HomeSharedTitle>
      </VStack>
    </VStack>
  );
}

export default PriceInfoSection;
