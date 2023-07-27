import { Typography, TypographyProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FAMILY_BY_LANGUAGE: {
  [key: string]: string;
} = {
  ko: 'Pretendard',
  jp: 'Pretendard',
  en: 'Dohyeon',
  tw: 'Noto Sans TC',
};

const ResponsiveFamilyTypography = ({
  children,
  fontWeight,
  sx,
  ...rest
}: TypographyProps) => {
  const { i18n } = useTranslation();
  const fontFamily = FAMILY_BY_LANGUAGE[i18n.language];

  return (
    <Typography
      sx={sx}
      fontWeight={i18n.language === 'en' ? 400 : fontWeight}
      {...rest}
      fontFamily={fontFamily}
    >
      {children}
    </Typography>
  );
};

export default ResponsiveFamilyTypography;
