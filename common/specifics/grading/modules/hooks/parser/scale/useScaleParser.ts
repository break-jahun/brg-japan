import { useTranslation } from 'react-i18next';

function useScaleParser() {
  const { t } = useTranslation();

  const gradeDescription = {
    description1: t('grading-scale/1'),
    description2: t('grading-scale/2'),
    description3: t('grading-scale/3'),
    description4: t('grading-scale/4'),
    description5: t('grading-scale/5'),
    description6: t('grading-scale/6'),
    description7: t('grading-scale/7'),
    description7_5: t('grading-scale/7.5'),
    description8: t('grading-scale/8'),
    description8_5: t('grading-scale/8.5'),
    description9: t('grading-scale/9'),
    description10: t('grading-scale/10'),
  };
  return gradeDescription;
}

export default useScaleParser;
