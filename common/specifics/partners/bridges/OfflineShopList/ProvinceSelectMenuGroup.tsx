import {
  AFFILIATED,
  AffiliatedShopAttributes,
} from '@/common/types/affiliatedShop';
import { useGetProvinceListQuery } from '@/specifics/partners/modules/apihooks/useOfflineShopQuery';
import {
  getEnglishProvince,
  getProvinceOrderNumber,
  getSortOrderByLanguage,
} from '@/specifics/partners/modules/partnersUtils';
import {
  Select,
  Box,
  SelectChangeEvent,
  List,
  ListItem,
  Typography,
  MenuItem,
  styled,
  outlinedInputClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { forwardRef, memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useProvinceListData = () => {
  const { data: provinceData } = useGetProvinceListQuery();

  const provinceList = provinceData?.data?.map((province) => ({
    province: province.province,
  }));
  return { provinceList };
};

interface Props {
  selectedProvince: string;
  setSelectedProvince: (province: string) => void;
}

const ProvinceSelectMenuGroup = ({
  selectedProvince,
  setSelectedProvince,
}: Props) => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { provinceList } = useProvinceListData();

  useEffect(() => {
    if (provinceList) {
      setSelectedProvince(i18n.language === 'ko' ? '서울특별시' : 'Kowloon');
    }
  }, [i18n.language, provinceList, setSelectedProvince]);

  const handleChange = (e: SelectChangeEvent) => {
    const province = e.target.value as string;

    setSelectedProvince(province);
  };

  const handleClick = (province?: string) => {
    if (province) {
      setSelectedProvince(province);
    }
  };

  if (!provinceList) {
    return null;
  }

  return isMobile ? (
    <Box alignSelf="flex-start" maxWidth="139px" margin="0 0 10px 25px">
      <Select
        value={selectedProvince}
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: 'white',
          border: `1px solid #a4a4a4`,
          width: '139px',

          [`& .${outlinedInputClasses.input}`]: {
            background: 'none',
            padding: '9px 30px 9px 16px',
          },
        }}
        onChange={handleChange}
      >
        {provinceList.map((item) => (
          <MenuItem value={item.province} key={item.province}>
            <Typography
              fontWeight="bold"
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {i18n.language === 'en'
                ? getEnglishProvince(item.province)
                : item.province}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </Box>
  ) : (
    <StyledList disablePadding>
      {provinceList.map((item) => {
        const isActive = selectedProvince === item.province;
        return (
          <MenuListItem
            item={item}
            isActive={isActive}
            key={item.province}
            onClick={() => handleClick(item.province)}
          />
        );
      })}
    </StyledList>
  );
};

export default memo(ProvinceSelectMenuGroup);

export const BOX_SHADOW = '0 3px 39px 0 rgba(0, 0, 0, 0.16)';

const StyledList = styled(List)(({ theme }) => ({
  maxWidth: 'max-content',
  minWidth: '13.8%',
  width: 'inherit',
  padding: '20px 0',
  overflowY: 'auto',
  backgroundColor: theme.palette.gray_2,
  boxShadow: BOX_SHADOW,
  zIndex: 1,
}));

interface ListItemProp {
  isActive: boolean;
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<ListItemProp>(({ isActive }) => ({
  cursor: 'pointer',
  padding: '9px 25px',
  whiteSpace: 'nowrap',

  ...(isActive && {
    background: 'white',
    boxShadow: BOX_SHADOW,
  }),
}));

interface ItemProps {
  item: Pick<AffiliatedShopAttributes, 'province'>;
}

interface ListItemProps extends ItemProps {
  onClick: () => void;
  isActive: boolean;
}

const MenuListItem = ({ item, onClick, isActive }: ListItemProps) => {
  const { i18n } = useTranslation();

  return (
    <StyledListItem key={item.province} isActive={isActive} onClick={onClick}>
      <Typography
        fontSize="14px"
        color={isActive ? 'black' : '#646464'}
        fontWeight="bold"
      >
        {i18n.language === 'en'
          ? getEnglishProvince(item.province)
          : item.province}
      </Typography>
    </StyledListItem>
  );
};
