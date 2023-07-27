import { useTranslation } from 'react-i18next';
import { PRICE } from '@/common/modules/constants/price';

function useHolderAndLabelParser() {
  const { t, i18n } = useTranslation();

  const introText = {
    mainIntroInfoText1: t('grading/main/brg-info-3'),
    mainIntroInfoText2: t('grading/main/brg-info-4'),
    mainIntroInfoText3: t('grading/main/brg-info-5'),
    mainIntroInfoText4: t('grading/main/brg-info-6'),
  };

  const twoColorDescriptionText = {
    mainSectionText1: t('grading/main/brg-section-text-01'),
    mainSectionText2: t('grading/main/brg-section-text-02'),
    mainSectionText3: t('grading/main/brg-section-text-03'),
    mainSectionText4: t('grading/main/brg-section-text-04'),
  };

  const sealingMethodGuideText = {
    enhance: t('grading/main/brg-info-13'),
    beautifulSlab: t('grading/main/brg-info-14'),
    preservation: t('grading/main/brg-info-15'),
    security: t('grading/main/brg-info-16'),
  };

  const price = PRICE[i18n.language === 'ko' ? 'KRW' : 'USD'];

  const unit = i18n.language === 'ko' ? '₩' : '$';

  const priceCardText = {
    expressPrice: `${unit} ${price.EXP.toLocaleString()}`,
    regularPrice: `${unit} ${price.REG.toLocaleString()}`,
    reholderPrice: `${unit} ${price.REHOLDER.toLocaleString()}`,
    subPrice: t('grading/main/per-unit'),
    expressGuide: t('grading/main/takes-5-days'),
    reholderGuide: t('grading/main/takes-10-days'),
    expressAutoGuide: t('grading/main/brg-auto-price'),
    regularGuide: t('grading/main/takes-15-days'),
    regularAutoGuide: t('grading/main/brg-auto-price'),
    preparing: t('general/preparing'),
    buttonText: t('general/apply'),
    servicePreparing: t('general/preparing-services'),
  };

  const slideText = {
    slideText1: t('grading/main/is-brg'),
    slideText2: t('grading/main/brg-info-1'),
    slideText3: t('grading/main/brg-info-2'),
    submitText: t('general/apply'),
  };

  return {
    introText,
    twoColorDescriptionText,
    sealingMethodGuideText,
    priceCardText,
    slideText,
  };
}

export default useHolderAndLabelParser;
