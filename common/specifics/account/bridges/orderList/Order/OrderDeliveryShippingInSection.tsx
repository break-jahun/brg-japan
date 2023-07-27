import {
  ServiceOrderDetailProps,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import ShippingInDeliveryTrackingObjectTable from '@/specifics/account/bridges/orderList/Order/ShippingInDeliveryTrackingObjectTable';
import InvoiceInstruction from '@/specifics/account/components/OrderDetail/InvoiceInstruction';
import {
  useUpdateGradingOrderDeliveryInfoInMutation,
  useUpdateReholderOrderDeliveryInfoInMutation,
} from '@/specifics/account/modules/apihooks/useUpdateDeliveryInfoMutation';
import { DeliveryInfoFormType } from '@/specifics/account/modules/type/deliveryFormType';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function useOrderDeliveryShippingInSectionParser(
  serviceType: ServiceType,
  order: ServiceOrderDetailProps,
  refetch: () => void
) {
  if (!order) {
    throw new Error('order not exist');
  }

  const [canUpdateInfo, setCanUpdateInfo] = useState(false);
  const { t } = useTranslation();
  const { mutate: updateGradingDeliveryInfo } =
    useUpdateGradingOrderDeliveryInfoInMutation();

  const { mutate: updateReholderDeliveryInfo } =
    useUpdateReholderOrderDeliveryInfoInMutation();

  const handleSave = (deliveryInfo: DeliveryInfoFormType) => {
    if (serviceType === 'GRADING') {
      updateGradingDeliveryInfo(
        {
          id: order.id,
          ...deliveryInfo,
        },
        {
          onSuccess: () => {
            alert(t('general/invoice-number-entered'));
            setCanUpdateInfo(false);
            refetch();
          },
        }
      );
      setCanUpdateInfo(false);
    } else if (serviceType === 'REHOLDER') {
      updateReholderDeliveryInfo(
        {
          id: order.id,
          ...deliveryInfo,
        },
        {
          onSuccess: () => {
            alert(t('general/invoice-number-entered'));
            setCanUpdateInfo(false);
            refetch();
          },
        }
      );
      setCanUpdateInfo(false);
    }
  };
  return {
    canUpdateInfo,
    setCanUpdateInfo,
    handleSave,
  };
}

function OrderDeliveryShippingInSection({
  order,
  serviceType,
  refetch,
}: {
  serviceType: ServiceType;
  order: ServiceOrderDetailProps;
  refetch: () => void;
}) {
  const { canUpdateInfo, setCanUpdateInfo, handleSave } =
    useOrderDeliveryShippingInSectionParser(serviceType, order, refetch);
  return (
    <Box>
      <InvoiceInstruction />
      <ShippingInDeliveryTrackingObjectTable
        defaultTrackingNumber={order.trackingNumIn || ''}
        defaultDeliveryCompanyNumber={order.deliveryComIn || ''}
        canUpdateInfo={canUpdateInfo}
        setCanUpdateInfo={setCanUpdateInfo}
        onSave={handleSave}
      />
    </Box>
  );
}

export default OrderDeliveryShippingInSection;
