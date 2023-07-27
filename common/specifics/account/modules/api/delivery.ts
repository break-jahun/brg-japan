import client from '@/common/modules/client';
import clientNew from '@/common/modules/clientNew';
import { UpdateDeliveryInfoIn } from '@/common/types/order';
import { UpdateDeliveryInfoInParams } from '@/specifics/account/modules/apihooks/useUpdateDeliveryInfoMutation';

async function updateGradingOrderDeliveryInfoIn(
  params: UpdateDeliveryInfoInParams
): Promise<UpdateDeliveryInfoIn> {
  const { id, deliveryCompanyNumber, trackingNumber } = params;
  const { data } = await client.put(`/api/gradingorder/updateTrackingInfo`, {
    id,
    deliveryComIn: deliveryCompanyNumber,
    trackingNumIn: trackingNumber,
  });
  return data;
}

async function updateReholderOrderDeliveryInfoIn(
  params: UpdateDeliveryInfoInParams
): Promise<UpdateDeliveryInfoIn> {
  const { id, deliveryCompanyNumber, trackingNumber } = params;
  const { data } = await clientNew.patch(
    `/api/reholder/shipping/tracking/number`,
    {
      orderId: id,
      deliveryComIn: deliveryCompanyNumber,
      trackingNumIn: trackingNumber,
    }
  );
  return data;
}

export default {
  updateGradingOrderDeliveryInfoIn,
  updateReholderOrderDeliveryInfoIn,
};
