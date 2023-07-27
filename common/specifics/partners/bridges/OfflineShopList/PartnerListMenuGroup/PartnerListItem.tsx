import { AffiliatedShopAttributes } from '@/common/types/affiliatedShop';
import { getLinkTypeInKorean } from '@/specifics/partners/modules/partnersUtils';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Link, ListItem, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  item: AffiliatedShopAttributes;
  isActive: boolean;
  onClick?: () => void;
}

const PartnerListItem = ({ item, isActive, onClick }: Props) => {
  const { i18n } = useTranslation();

  return (
    <StyledListItem
      alignItems="flex-start"
      onClick={onClick}
      isActive={isActive}
    >
      <Box mb="4px">
        <Typography
          color={isActive ? '#6034B0' : 'black'}
          variant="subtitle2"
          fontWeight="bold"
        >
          {i18n.language === 'en' ? item?.englishName : item?.name}
        </Typography>
      </Box>
      <Box mb="4px">
        <Typography variant="caption" fontWeight="medium">
          {i18n.language === 'en' ? item?.englishAddress : item?.address}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        width={1}
      >
        {item.postcode && (
          <Typography variant="caption" fontWeight="medium">
            {item.postcode.toString()}
          </Typography>
        )}
        {item.phone && (
          <Typography variant="caption" fontWeight="medium">
            {item.phone}
          </Typography>
        )}
        {item.linkType && (
          <Link
            href={item.linkUrl}
            target="_black"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '4px',
              height: '24px',
              color: 'black',
              fontSize: '12px',
              fontWeight: '500',
            }}
          >
            {getLinkTypeInKorean(item.linkType, i18n.language)}
            <KeyboardArrowRight fontSize="small" />
          </Link>
        )}
      </Box>
    </StyledListItem>
  );
};

export default PartnerListItem;

const BORDER_COLOR = '1px solid #707070';
const SELECT_BORDER_COLOR = `1px solid #6034B0`;

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (props) => props !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 23px',
  background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'white',
  borderBottom: isActive ? SELECT_BORDER_COLOR : BORDER_COLOR,
  cursor: 'pointer',

  '&::after': {
    content: "''",
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: isActive ? '1px' : 0,
    backgroundColor: '#6034B0',
  },
  '& a:hover': {
    background: '#E5E5EC',
  },

  '& .MuiSvgIcon-fontSizeSmall': {
    fontSize: '1rem',
    marginTop: '2px',
    color: 'black',
  },
}));
