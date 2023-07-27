import { useTranslation } from 'react-i18next';

function useProcessParser() {
  const { t } = useTranslation();

  const step12Text = {
    stepText1: t('grading/main/data-contrast'),
    stepText2: t('grading/main/sample-data-extraction'),
    stepText3: t('grading/main/img-data-extraction'),
    stepText4: 'SURFACE CHECK',
    stepText5: 'EDGES CHECK',
    stepText6: 'CORNERS CHECK',
    stepText7: 'CENTERING CHECK',
    stepText8: 'OVERALL CHECK',
    stepText9: 'MAPPING',
    stepText10: 'LABELING',
    stepText11: 'ENCASING',
    stepText12: 'SCANNING',
  };
  return step12Text;
}

export default useProcessParser;
