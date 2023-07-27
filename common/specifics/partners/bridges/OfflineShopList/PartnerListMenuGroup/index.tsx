import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  Button,
  List,
  styled,
  svgIconClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import roundButtonBackground from '@/public/images/round_button_background.svg';
import { BOX_SHADOW } from '@/specifics/partners/bridges/OfflineShopList/ProvinceSelectMenuGroup';
import { AffiliatedShopAttributes } from '@/common/types/affiliatedShop';
import PartnerListItem from '@/specifics/partners/bridges/OfflineShopList/PartnerListMenuGroup/PartnerListItem';

export const TRANSITION = 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  partnerShopList: AffiliatedShopAttributes[] | undefined;
  selectedOfflineShop: AffiliatedShopAttributes | undefined;
  setSelectedOfflineShop: (value: AffiliatedShopAttributes) => void;
}

const PartnerListMenuGroup = ({
  isOpen,
  setIsOpen,
  partnerShopList,
  selectedOfflineShop,
  setSelectedOfflineShop,
}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOfflineShop = (item: AffiliatedShopAttributes) => {
    setSelectedOfflineShop(item);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  if (!partnerShopList) {
    return <StyledList />;
  }

  return isMobile ? (
    <>
      <ListContainer isOpen={isOpen}>
        <StyledList>
          {partnerShopList.map((item) => (
            <PartnerListItem
              key={item.id}
              isActive={selectedOfflineShop?.id === item.id}
              item={item}
              onClick={() => handleClickOfflineShop(item)}
            />
          ))}
        </StyledList>
      </ListContainer>

      <ArrowIconBox
        isOpen={isOpen}
        sx={{
          [`& ${svgIconClasses.fontSizeLarge}`]: {
            fontSize: '2rem',
          },
        }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            position: 'relative',
            width: '89px',
            height: '360px',
            backgroundImage: `url(${roundButtonBackground.src})`,
          }}
        >
          <KeyboardArrowRight
            sx={{
              position: 'absolute',
              top: '121px',
              right: -7,
              transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: TRANSITION,
            }}
            fontSize="large"
          />
        </Button>
      </ArrowIconBox>
    </>
  ) : (
    <StyledList>
      {partnerShopList.map((item) => (
        <PartnerListItem
          key={item.id}
          isActive={selectedOfflineShop?.id === item.id}
          item={item}
          onClick={() => handleClickOfflineShop(item)}
        />
      ))}
    </StyledList>
  );
};

export default PartnerListMenuGroup;

interface StyledProps {
  isOpen: boolean;
}

const PropWrappedBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<StyledProps>({});

const ListContainer = styled(PropWrappedBox)(({ isOpen }) => ({
  display: 'flex',
  width: '80%',
  height: '497px',
  position: 'absolute',
  borderRight: !isOpen ? '4px solid white' : 'none',
  transform: !isOpen ? 'translateX(calc(-100% + 4px))' : 'translateX(0)',
  transition: TRANSITION,
  zIndex: 150,
}));

const ArrowIconBox = styled(PropWrappedBox)(({ isOpen }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  alignItems: 'center',
  width: 'calc(80% + 16px)',
  left: 0,
  top: '87px',
  zIndex: 100,
  transform: !isOpen ? 'translateX(calc(-100% + 21px))' : 'translateX(0)',
  transition: TRANSITION,
  height: '100%',
}));

const StyledList = styled(List)({
  padding: 0,
  backgroundColor: 'white',
  overflowY: 'auto',
  width: 'inherit',
  scrollbarWidth: 'thin' /* 파이어 폭스 */,
  scrollbarColor: '#343434#cecece',
  msScrollbarDarkshadowColor: 'none' /* IE and Edge */,
  msScrollbar3dlightColor: 'none',
  msScrollbarArrowColor: 'none',
  msScrollbarFaceColor: '#343434',
  msScrollbarHighlightColor: '#343434',
  msScrollbarShadowColor: '#343434',
  maxHeight: '497px',
  boxShadow: BOX_SHADOW,

  /* 크롬, 사파리, 오페라 */
  '&::-webkit-scrollbar': {
    width: 4,
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#343434',
  },
  '&::-webkit-scrollbar-track': {
    background: '#cecece',
  },
  '@media (max-width: 768px)': {
    width: '100%',
  },
});
