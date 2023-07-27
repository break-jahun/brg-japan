import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { CommonButton } from '@/common/components/Button';
import { VStack } from '@/common/components/VStack';
import SectionTitle from '@/specifics/grading/components/SectionTitle';

function GradingSubmitSection() {
  const { t } = useTranslation();

  return (
    <VStack
      width="100%"
      height={{ xs: '200px', sm: '300px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SectionTitle
        sx={{ wordBreak: 'keep-all', padding: '0 30px', marginBottom: '30px' }}
      >
        SUBMIT YOUR CARDS FOR GRADING
      </SectionTitle>
      <Link href="/grading/submit" passHref>
        <CommonButton sx={{ width: '120px' }}>
          {t('general/apply')}
        </CommonButton>
      </Link>
    </VStack>
  );
}

export default GradingSubmitSection;
