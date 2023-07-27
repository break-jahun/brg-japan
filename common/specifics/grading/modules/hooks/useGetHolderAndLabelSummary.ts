import ZoomOutMap from '@mui/icons-material/ZoomOutMap';
import Lock from '@mui/icons-material/Lock';
import PlaylistAddCheck from '@mui/icons-material/PlaylistAddCheck';
import SyncAlt from '@mui/icons-material/SyncAlt';

import useHolderAndLabelParser from '@/specifics/grading/modules/hooks/parser/holderAndLabel/useHolderAndLabelParser';
import {
  IntroSummaryType,
  PricingInfoSectionSummaryType,
  SealingMethodGuideSummaryType,
  TwoColorDescriptionSummaryType,
} from '@/specifics/grading/modules/types/summary';

function useGetHolderAndLabelSummary() {
  const {
    introText,
    twoColorDescriptionText,
    sealingMethodGuideText,
    priceCardText,
  } = useHolderAndLabelParser();

  const introSummary: IntroSummaryType[] = [
    {
      title: 'CUSTOMIZED',
      description: introText.mainIntroInfoText1,
      icon: ZoomOutMap,
    },
    {
      title: 'SAFEKEEPING',
      description: introText.mainIntroInfoText2,
      icon: Lock,
    },
    {
      title: 'RELIABLE',
      description: introText.mainIntroInfoText3,
      icon: PlaylistAddCheck,
    },
    {
      title: 'FAST',
      description: introText.mainIntroInfoText4,
      icon: SyncAlt,
    },
  ];

  const twoColorDescriptionSummary: TwoColorDescriptionSummaryType[] = [
    {
      title: 'CLEAREST SLAB IN THE INDUSTRY',
      bgColor: 'white',
      description: twoColorDescriptionText.mainSectionText1,
    },
    {
      title: 'CASE MADE WITH HIGH-PURITY MATERIAL',
      bgColor: 'black',
      description: twoColorDescriptionText.mainSectionText2,
      image: '/images/high_purity_case.png',
      alt: 'use of high materials',
    },
    {
      title: 'TAMPER-EVIDENT ULTRASONIC SEALING',
      bgColor: 'white',
      description: twoColorDescriptionText.mainSectionText3,
    },
    {
      title: 'SAFE SEALING METHOD',
      bgColor: 'black',
      description: twoColorDescriptionText.mainSectionText4,
      image: '/images/sealing.png',
      alt: 'safe sealing method',
    },
  ];

  const sealingMethodGuideSummary: SealingMethodGuideSummaryType[] = [
    {
      guideNumber: '01',
      title: 'Enhance your card’s value',
      description: sealingMethodGuideText.enhance,
    },
    {
      guideNumber: '02',
      title: `Beautiful Slab${'\n'}No "One Size Fits All"`,
      description: sealingMethodGuideText.beautifulSlab,
    },
    {
      guideNumber: '03',
      title: 'Preservation',
      description: sealingMethodGuideText.preservation,
    },
    {
      guideNumber: '04',
      title: 'Security',
      description: sealingMethodGuideText.security,
    },
  ];

  const pricingInfoSectionSummary: PricingInfoSectionSummaryType[] = [
    {
      title: 'EXPRESS',
      titleKR: '익스프레스',
      price: priceCardText.expressPrice,
      subPrice: priceCardText.subPrice,
      description: [priceCardText.expressGuide],
      autoDescription: priceCardText.expressAutoGuide,
      buttonText: priceCardText.buttonText,
      disabled: false,
      orderType: 'EXP',
    },
    {
      title: 'REGULAR',
      titleKR: '레귤러',
      price: priceCardText.regularPrice,
      subPrice: priceCardText.subPrice,
      description: [priceCardText.regularGuide],
      autoDescription: priceCardText.regularAutoGuide,
      buttonText: priceCardText.buttonText,
      disabled: false,
      orderType: 'REG',
    },
    {
      title: 'REHOLDER',
      titleKR: '리홀더',
      price: priceCardText.reholderPrice,
      subPrice: priceCardText.subPrice,
      description: [priceCardText.reholderGuide],
      autoDescription: '',
      buttonText: priceCardText.buttonText,
      disabled: false,
      orderType: 'REH',
    },
  ];

  return {
    introSummary,
    twoColorDescriptionSummary,
    sealingMethodGuideSummary,
    pricingInfoSectionSummary,
  };
}

export default useGetHolderAndLabelSummary;
