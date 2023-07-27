import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AffiliatedShopInfo from 'brg-japan/containers/PartnerShop/PartnerShopListSection/AffiliatedShopInfo';
import GoogleMapSection from 'brg-japan/containers/PartnerShop/PartnerShopListSection/GoogleMapSection';
import useGetAffiliatedShop from 'brg-japan/containers/PartnerShop/hooks/useGetAffiliatedShop';
import useGetProvinceList from 'brg-japan/containers/PartnerShop/hooks/useGetPrivinceList';
import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 } from 'uuid';

function PartnerShopListSection() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const { data } = useGetProvinceList();

  const selectRef = useRef();

  const provinceList = useMemo(
    () => data?.map((item) => item.province),
    [data]
  );

  const [currentProvince, setCurrentProvince] = useState<string | undefined>();
  const [currentAffiliatedShopName, setCurrentAffiliatedShopName] = useState<
    string | undefined
  >();

  const isSelectedProvince = !!currentProvince;

  const { data: affiliatedShops } = useGetAffiliatedShop(
    {
      shopType: 'OFFLINE',
      sortOrder: 'desc',
      province: currentProvince,
    },
    {
      enabled: isSelectedProvince,
    }
  );

  const currentAffiliatedShop = affiliatedShops?.find(
    (item) => item.name === currentAffiliatedShopName
  );

  const handleChangeProvince = (
    event: SelectChangeEvent<typeof currentProvince>
  ) => {
    setCurrentProvince(event.target.value);
  };

  const handleChangeAffiliatedShop = (
    event: SelectChangeEvent<typeof currentAffiliatedShopName>
  ) => {
    setCurrentAffiliatedShopName(event.target.value);
  };

  useEffect(() => {
    if (affiliatedShops) {
      setCurrentAffiliatedShopName(affiliatedShops?.[0]?.name);
    }
  }, [affiliatedShops]);

  return (
    <VStack
      paddingY={{ xs: '120px', sm: '156px' }}
      width={{ xs: '100%', sm: `${theme.breakpoints.values.sm}px` }}
      paddingX={{ xs: '16px', sm: '32px' }}
      margin="auto"
    >
      <VStack gap="24px" width="100%">
        <Typography
          variant={isDesktop ? 'h3' : 'h4'}
          fontFamily="Pretendard"
          color="rgb(0, 50, 91)"
          textAlign="center"
          fontWeight={600}
        >
          パートナーショップリスト
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap="8px"
        >
          <Box flex={1}>
            <Select
              ref={selectRef}
              fullWidth
              size="medium"
              value={currentProvince || ''}
              onChange={handleChangeProvince}
              displayEmpty
              renderValue={(selected) => {
                if (!selected || selected?.length === 0) {
                  return '都市';
                }
                return selected;
              }}
              sx={{ borderRadius: '4px' }}
            >
              {provinceList?.map((province) => (
                <MenuItem key={province} value={province}>
                  {province}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box flex={1}>
            <Select
              fullWidth
              sx={{ borderRadius: '4px' }}
              disabled={!isSelectedProvince || affiliatedShops?.length === 0}
              value={currentAffiliatedShopName || ''}
              onChange={handleChangeAffiliatedShop}
              displayEmpty
              renderValue={(selected) => {
                if (!selected || selected?.length === 0) {
                  return '店名';
                }
                return selected;
              }}
            >
              {affiliatedShops?.map((shop) => (
                <MenuItem key={v4()} value={shop.name}>
                  {shop.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <AffiliatedShopInfo affiliatedShop={currentAffiliatedShop} />
        {currentAffiliatedShop?.latitude &&
          currentAffiliatedShop?.longitude && (
            <GoogleMapSection
              latitude={currentAffiliatedShop.latitude}
              longitude={currentAffiliatedShop.longitude}
            />
          )}
      </VStack>
    </VStack>
  );
}

export default PartnerShopListSection;
