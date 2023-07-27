import { useTranslation } from 'react-i18next';
import { CATEGORY_LIST } from '@/specifics/faq/faqConstants';
import { Locale } from '@/common/types/common';

const useCategoryListParser = () => {
  const { i18n } = useTranslation();
  const isKR = i18n.language === Locale.KR;

  const categoryList = Object.entries(
    isKR ? CATEGORY_LIST.ko : CATEGORY_LIST.en
  );

  return { categoryList };
};

export default useCategoryListParser;
