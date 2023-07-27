import MediaQuery from '@/common/components/MediaQuery';
import {
  currentOrderStatusState,
  currentOrderTypeState,
} from '@/specifics/account/modules/recoil/orderList';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, NativeSelect, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useMemo } from 'react';

const KeyboardArrowDownIcon = () => (
  <KeyboardArrowDown
    sx={{
      position: 'absolute',
      right: 0,
      pointerEvents: 'none',
      color: 'black',
    }}
  />
);

function useOrderStatusSelectorParser() {
  const { t } = useTranslation();
  const currentOrderType = useRecoilValue(currentOrderTypeState);
  const [currentOrderStatus, setCurrentOrderStatus] = useRecoilState(
    currentOrderStatusState
  );
  const orderTypes: { text: string; value: string; isActive: boolean }[] =
    useMemo(() => {
      if (currentOrderType === 'EVENT') {
        return [
          {
            text: t('grading/order/entire'),
            value: 'ALL',
            isActive: currentOrderStatus === 'ALL',
          },
          {
            text: t('general/payment'),
            value: 'PAYMENT_COMPLETE',
            isActive: currentOrderStatus === 'PAYMENT_COMPLETE',
          },
          {
            text: t('general/delivery-ing'),
            value: 'SHIPPING_OUT',
            isActive: currentOrderStatus === 'SHIPPING_OUT',
          },
          {
            text: t('general/complete'),
            value: 'SHIPPING_OUT_COMPLETE',
            isActive: currentOrderStatus === 'SHIPPING_OUT_COMPLETE',
          },
          {
            text: t('general/cancel-word'),
            value: 'CANCELLED',
            isActive: currentOrderStatus === 'CANCELLED',
          },
          {
            text: t('general/refund'),
            value: 'REFUNDED',
            isActive: currentOrderStatus === 'REFUNDED',
          },
        ];
      }
      return [
        {
          text: t('grading/order/entire'),
          value: 'ALL',
          isActive: currentOrderStatus === 'ALL',
        },
        {
          text: t('general/ongoing'),
          value: 'PROCESSING',
          isActive: currentOrderStatus === 'PROCESSING',
        },
        {
          text: t('general/cancel-word'),
          value: 'CANCELLED',
          isActive: currentOrderStatus === 'CANCELLED',
        },
        {
          text: t('general/refund'),
          value: 'REFUNDED',
          isActive: currentOrderStatus === 'REFUNDED',
        },
        {
          text: t('general/complete'),
          value: 'COMPLETE',
          isActive: currentOrderStatus === 'COMPLETE',
        },
      ];
    }, [currentOrderStatus, currentOrderType, t]);
  useEffect(() => {
    setCurrentOrderStatus('ALL');
  }, [currentOrderType, setCurrentOrderStatus]);
  const handleOrderStatusLabelClicked = (title: string) => {
    setCurrentOrderStatus(title);
  };
  return { currentOrderStatus, orderTypes, handleOrderStatusLabelClicked };
}
const OrderStatusSelector = () => {
  const { currentOrderStatus, orderTypes, handleOrderStatusLabelClicked } =
    useOrderStatusSelectorParser();
  return (
    <>
      {/* Default */}
      <MediaQuery isMobile>
        <Box pr={0} display="flex" alignItems="center">
          <NativeSelect
            defaultValue={currentOrderStatus}
            disableUnderline
            className=".MuiTypography-overline"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
            }}
            inputProps={{
              name: 'orderType',
              id: 'uncontrolled-native',
              style: {
                width: '100%',
                textAlign: 'center',
              },
            }}
            IconComponent={KeyboardArrowDownIcon}
            onChange={(event) =>
              handleOrderStatusLabelClicked(event.target.value)
            }
          >
            {orderTypes.map((orderType) => {
              return (
                <option key={orderType.value} value={orderType.value}>
                  {orderType.text}
                </option>
              );
            })}
          </NativeSelect>
        </Box>
      </MediaQuery>

      {/* Desktop */}
      <MediaQuery isMobile={false}>
        <Box
          display="flex"
          flexDirection="row"
          my={0}
          pr={0}
          alignItems="center"
        >
          {orderTypes.map((orderType) => {
            return (
              <OrderStatusLabel
                key={orderType.value}
                isActive={orderType.isActive}
                onClick={() => handleOrderStatusLabelClicked(orderType.value)}
              >
                <Typography fontWeight={700} variant="overline">
                  {orderType.text}
                </Typography>
              </OrderStatusLabel>
            );
          })}
        </Box>
      </MediaQuery>
    </>
  );
};

const OrderStatusLabel = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  marginRight: '12px',
  fontSize: 10,
  minWidth: '50px',
  height: '33.5px',
  maxHeight: '50px',
  backgroundColor: isActive ? '#000000' : 'transparent',
  color: isActive ? '#ffffff' : '#000000',
}));

export default OrderStatusSelector;
