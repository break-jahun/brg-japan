import {
  inputBaseClasses,
  outlinedInputClasses,
  Select,
  svgIconClasses,
  Typography,
} from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { MenuItem } from '@/common/components/Select';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-restricted-imports
import { SelectInputProps } from '@mui/material/Select/SelectInput';

interface Props {
  locales: { key: string; value: string }[];
  dark: boolean;
}

const LanguageSelect = ({ locales, dark }: Props) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const handleChange: SelectInputProps['onChange'] = (event) => {
    i18n.changeLanguage(event.target.value as string);
    localStorage.setItem('language', event.target.value as string);
  };

  const themeColor = dark ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.24)';

  return (
    <Select
      //   MenuProps={{
      //     MenuListProps: {
      //       disablePadding: true,
      //     },
      //   }}
      sx={{
        backgroundColor: 'transparent',
        border: `1px solid ${themeColor}`,
        color: dark ? 'rgba(0, 0, 0, 0.36);' : 'white',
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
          {
            border: `1px solid ${themeColor}`,
          },

        [`& .${inputBaseClasses.input}`]: {
          padding: '0 28px 0 8px',
        },
        [`& .${svgIconClasses.root}`]: {
          color: dark ? 'rgba(0, 0, 0, 0.36);' : 'white',
          right: '0',
        },
      }}
      IconComponent={ArrowDropDownRoundedIcon}
      value={language}
      onChange={handleChange}
    >
      {locales.map((locale) => (
        <MenuItem key={locale.key} value={locale.value} dense>
          <Typography fontWeight={500} variant="button">
            {locale.key}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelect;
