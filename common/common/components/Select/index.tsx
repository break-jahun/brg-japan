import {
  inputBaseClasses,
  MenuItem,
  menuItemClasses,
  MenuItemProps,
  outlinedInputClasses,
  Select,
  selectClasses,
  SelectProps,
  Theme,
} from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { SystemStyleObject } from '@mui/system';

const BrgSelect = ({ children, placeholder, sx, ...rest }: SelectProps) => {
  return (
    <Select
      fullWidth
      sx={(theme) =>
        ({
          backgroundColor: 'white',
          [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
            {
              borderColor: theme.palette.secondary_10,
            },
          [`& .${selectClasses.select} .notranslate::after`]: placeholder
            ? {
                content: `"${placeholder}"`,
                color: 'gray_400',
              }
            : {},
          [`& .${inputBaseClasses.input}`]: {
            paddingY: '12.5px',
          },
          [`& .${selectClasses.outlined}.${selectClasses.disabled}`]: {
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
          },
          ...sx,
        } as SystemStyleObject<Theme>)
      }
      IconComponent={ArrowDropDownRoundedIcon}
      {...rest}
    >
      {children}
    </Select>
  );
};

const BrgMenuItem = ({ children, ...rest }: MenuItemProps) => {
  return (
    <MenuItem
      sx={(theme) => ({
        [`&.${menuItemClasses.root}.${menuItemClasses.selected}`]: {
          backgroundColor: theme.palette.secondary_90,
        },
      })}
      {...rest}
    >
      {children}
    </MenuItem>
  );
};

export { BrgSelect as Select, BrgMenuItem as MenuItem };
