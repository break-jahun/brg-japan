import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/* holder and label */
export interface IntroSummaryType {
  title: string;
  description: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export interface TwoColorDescriptionSummaryType {
  title: string;
  bgColor: 'black' | 'white';
  description: string;
  image?: string;
  alt?: string;
}
export interface SealingMethodGuideSummaryType {
  guideNumber: string;
  title: string;
  description: string;
}
export interface PricingInfoSectionSummaryType {
  title: string;
  titleKR: string;
  price: string;
  subPrice: string;
  description: string[];
  autoDescription: string;
  buttonText: string;
  disabled: boolean;
  orderType: 'EXP' | 'REG' | 'REH';
}

/* pricing */
export interface fourStepSummaryType {
  title: string;
  description: string;
  image: string;
}

export interface GradingScaleDescriptionType {
  id: number;
  title: string;
  mobileTitle: string;
  description: string;
}
