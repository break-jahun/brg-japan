import {
  AFFILIATED,
  AffiliatedShopAttributes,
} from '@/common/types/affiliatedShop';
import PartnerListMenuGroup, {
  TRANSITION,
} from '@/specifics/partners/bridges/OfflineShopList/PartnerListMenuGroup';
import PartnerListItem from '@/specifics/partners/bridges/OfflineShopList/PartnerListMenuGroup/PartnerListItem';
import { useGetAffiliatedShopQuery } from '@/specifics/partners/modules/apihooks/useOfflineShopQuery';
import { Box, outlinedInputClasses, styled, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import OfflineShopMap from './OfflineShopMap';
import ProvinceSelectMenuGroup from './ProvinceSelectMenuGroup';

const usePartnerListData = (selectedProvince: string) => {
  const { isLoading, data } = useGetAffiliatedShopQuery(
    {
      shopType: 'OFFLINE',
      sortOrder: 'asc',
      province: selectedProvince,
    },
    {
      staleTime: 60 * 5 * 1000,
    }
  );

  const partnerShopList = data;

  return {
    isPartnerShopRequestLoading: isLoading,
    partnerShopList,
  };
};

const OfflineShopList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedOfflineShop, setSelectedOfflineShop] =
    useState<AffiliatedShopAttributes>();

  const { partnerShopList, isPartnerShopRequestLoading } =
    usePartnerListData(selectedProvince);

  useEffect(() => {
    if (partnerShopList) {
      setSelectedOfflineShop(partnerShopList[0]);
    }
  }, [partnerShopList]);

  return (
    <MainContainer>
      <Box sx={{ mb: '16px' }}>
        <Typography variant="h6" fontWeight={700} color="white">
          Offline Shop
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: '1000px' },
          display: { xs: 'block', sm: ' flex' },
          justifyContent: 'center',
          maxHeight: { xs: '0', sm: '497px' },
          position: 'relative',
        }}
      >
        <ProvinceSelectMenuGroup
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
        />
        <PartnerListMenuGroup
          partnerShopList={partnerShopList}
          selectedOfflineShop={selectedOfflineShop}
          setSelectedOfflineShop={setSelectedOfflineShop}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box
          width={{ xs: '100%', sm: '500px' }}
          minWidth={{ xs: '100%', sm: '500px' }}
          height="497px"
          position="relative"
          bgcolor="white"
        >
          {selectedOfflineShop && (
            <Box
              sx={{
                display: { xs: 'block', sm: 'none' },
                width: '80%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: isOpen ? 90 : 110,
                opacity: !isOpen ? 1 : 0.1,
                transition: TRANSITION,
              }}
            >
              <PartnerListItem item={selectedOfflineShop} isActive />
            </Box>
          )}
          {!isPartnerShopRequestLoading && selectedOfflineShop && (
            <OfflineShopMap selectedOfflineShop={selectedOfflineShop} />
          )}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default OfflineShopList;

const MainContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '16px 0 10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(41deg, #3f70aa 10%, #512978 89%)',

  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    border: 'none',
  },
}));
