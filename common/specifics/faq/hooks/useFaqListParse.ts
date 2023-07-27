import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { FaqItemType, FaqLocaleType } from '@/specifics/faq/faqType';
import { FAQ_LIST } from '@/specifics/faq/faqConstants';

const useFaqListParser = (currentCategory: string) => {
  const { i18n } = useTranslation();

  const faqList = useMemo((): FaqItemType[] => {
    const faqListAll = FAQ_LIST[i18n.language as FaqLocaleType];

    const filteredFaqList =
      currentCategory === 'all'
        ? faqListAll
        : faqListAll.filter((faq) => faq.category === currentCategory);

    return filteredFaqList;
  }, [currentCategory, i18n.language]);

  return {
    faqList,
  };
};

export default useFaqListParser;
