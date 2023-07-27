import {
  AFFILIATED,
  AffiliatedShopAttributes,
} from '@/common/types/affiliatedShop';
import { useGetAffiliatedShopQuery } from '@/specifics/partners/modules/apihooks/useOfflineShopQuery';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import InfinitySlider from '@/common/components/InfinitySlider';
import PartnerShopSliderItem from './PartnerShopSliderItem';

const PartnerShopSlider = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const { data } = useGetAffiliatedShopQuery({
    shopType: 'ONLINE',
    sortOrder: 'desc',
    province: '',
  });

  if (!data) {
    return null;
  }

  return (
    <Box
      sx={{
        margin: { xs: '32px 0 38px', sm: '40px 0' },
        width: '100%',
        color: 'red',
        paddingTop: '20px',
      }}
    >
      {isDesktop ? <DesktopSlider list={data} /> : <MobileSlider list={data} />}
    </Box>
  );
};

export default PartnerShopSlider;

interface Props {
  list: AffiliatedShopAttributes[];
}

const MobileSlider = ({ list }: Props) => {
  const centerIndex = list.length / 2 + 1;
  const topSliderList = list.slice(0, centerIndex);
  const bottomSliderList = list.slice(centerIndex);

  return (
    <>
      <InfinitySlider itemWidth={112}>
        {topSliderList.map((shop) => (
          <PartnerShopSliderItem key={shop.id} src={shop.logoUrl} />
        ))}
      </InfinitySlider>
      <InfinitySlider containerProps={{ marginLeft: '-56px' }} itemWidth={112}>
        {bottomSliderList.map((shop, index) => (
          <PartnerShopSliderItem key={shop.name} src={shop.logoUrl} />
        ))}
      </InfinitySlider>
    </>
  );
};

const DesktopSlider = ({ list }: Props) => {
  return (
    <InfinitySlider itemWidth={182}>
      {list.map((shop) => (
        <PartnerShopSliderItem key={shop.id} src={shop.logoUrl} />
      ))}
    </InfinitySlider>
  );
};
