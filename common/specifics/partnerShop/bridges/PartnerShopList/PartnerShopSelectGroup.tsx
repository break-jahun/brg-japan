import {
  AFFILIATED,
  AffiliatedShopAttributes,
} from '@/common/types/affiliatedShop';
import { useGetAffiliatedShopQuery } from '@/specifics/partners/modules/apihooks/useOfflineShopQuery';
import { Box } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { MenuItem, Select } from '@/common/components/Select';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export type ShopState = '' | AffiliatedShopAttributes;

export interface PartnerShopSelectGroupProps {
  shop: ShopState;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  setShop: Dispatch<SetStateAction<AffiliatedShopAttributes | ''>>;
}

interface ProvinceData {
  province: string;
}

interface Props extends PartnerShopSelectGroupProps {
  provinceList: ProvinceData[] | undefined;
}

const PartnerShopSelectGroup = ({
  shop,
  city,
  setCity,
  setShop,
  provinceList,
}: Props) => {
  const { i18n, t } = useTranslation();

  const isOnline = city === 'Online Shop';

  const { data: shopList, isFetching } = useGetAffiliatedShopQuery(
    {
      shopType: isOnline ? 'ONLINE' : 'OFFLINE',
      sortOrder: 'asc',
      province: city,
    },
    {
      onSuccess: (data) => {
        setShop(data[0] || null);
      },
    }
  );

  const handleCityChange: SelectInputProps['onChange'] = (e) => {
    setCity(e.target.value as string);
  };

  const handleShopChange: SelectInputProps['onChange'] = (e) => {
    const selectedShop =
      shopList?.find((item) => item.name === e.target.value) || '';

    setShop(selectedShop);
  };

  const shopSelectValue = !isFetching && shop ? shop.name : '';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: '16px', sm: '24px' },
      }}
    >
      <Select
        value={city}
        onChange={handleCityChange}
        placeholder={t('partner-3')}
      >
        {provinceList?.map((province) => (
          <MenuItem value={province.province} key={province.province}>
            {province.province}
          </MenuItem>
        ))}
      </Select>
      <Select
        disabled={city === ''}
        value={shopSelectValue}
        onChange={handleShopChange}
        placeholder={t('partner-4')}
      >
        {shopList?.map((item) => (
          <MenuItem value={item.name} key={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default PartnerShopSelectGroup;
