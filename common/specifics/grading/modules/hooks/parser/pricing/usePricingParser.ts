import { useTranslation } from 'react-i18next';

function usePricingParser() {
  const { t } = useTranslation();

  const stepText = {
    stepText1: t('grading/main/select-card-type-and-quantity'),
    stepText2: t('grading/main/select-auto-grade'),
    stepText3: t('general/upload-photo'),
    stepText4: t('general/payment'),
  };
  return stepText;
}

export default usePricingParser;
