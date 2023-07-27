import { CommonButton } from '@/common/components/Button';
import ObjectTable from '@/common/components/ObjectTable';
import { useDeliveryCompanyListQuery } from '@/common/modules/apiHooks/delivery';
import { ServiceOrderDetailProps } from '@/common/types/serviceOrder/serviceOrder';
import useOrderInfo from '@/specifics/account/modules/hooks/useOrderInfo';
import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function OrderDeliveryShippingOutSection({
  order,
}: {
  order: ServiceOrderDetailProps;
}) {
  const { t } = useTranslation();
  const { data: deliveryCompanyListData } = useDeliveryCompanyListQuery();
  const deliveryCompanyName = useMemo(() => {
    if (
      !deliveryCompanyListData ||
      !deliveryCompanyListData.Company ||
      !order.deliveryComOut
    )
      return t('general/no-information');
    const companyList = deliveryCompanyListData.Company as Array<any>;
    return companyList.find((item) => item.Code === order.deliveryComOut).Name;
  }, [deliveryCompanyListData, order, t]);
  const { getOrderStatusText } = useOrderInfo();
  const orderMessage = useMemo(
    () => getOrderStatusText(order),
    [getOrderStatusText, order]
  );

  return (
    <Box>
      <Box pl="5px" mb="10px">
        <Typography variant="body2" color="red" fontWeight={700}>
          {orderMessage}
        </Typography>
      </Box>
      <ObjectTable
        item={{
          deliveryCompanyName,
          trackingNumOut: order.trackingNumOut,
        }}
        keys={[
          {
            text: t('general/delivery-company'),
            value: 'deliveryCompanyName',
          },
          {
            text: t('general/transport-document-number'),
            value: 'trackingNumOut',
          },
        ]}
      />
      <form
        action={`${process.env.NEXT_PUBLIC_DELIVERY_BASE_URL}/tracking/5`}
        method="post"
        target="_blank"
      >
        <input
          type="hidden"
          id="t_key"
          name="t_key"
          value={process.env.NEXT_PUBLIC_DELIVERY_API_KEY}
        />
        <input
          type="hidden"
          name="t_code"
          id="t_code"
          value={order.deliveryComOut || ''}
        />
        <input
          type="hidden"
          name="t_invoice"
          id="t_invoice"
          value={order.trackingNumOut || ''}
        />
        <CommonButton buttonType="GRAY" fullWidth type="submit">
          {t('general/delivery-check')}
        </CommonButton>
      </form>
    </Box>
  );
}

export default OrderDeliveryShippingOutSection;
