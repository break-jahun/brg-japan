import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import { AddressAttributes } from '@/common/types/user/address';
import { jejuVerification } from '@/specifics/grading/modules/utils/addressUtils';
import { useTranslation } from 'react-i18next';
import {
  useUpdateGradingOrderAddress,
  useUpdateReholderOrderAddress,
} from '@/common/modules/hooks/useAddressQuery';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/common/types/common';

function useHandleSaveOrderAddress({
  serviceType = 'GRADING',
  orderId,
  onSuccessSave,
}: {
  serviceType: ServiceType;
  orderId?: number;
  onSuccessSave?: () => void;
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  //   servicetype에 따라 추후 분기처리
  const { mutate: mutateGrading } = useUpdateGradingOrderAddress();
  const { mutate: mutateReholder } = useUpdateReholderOrderAddress();

  const handleSaveOrderAddress = (address: AddressAttributes) => {
    const isJeju = jejuVerification(address);
    if (isJeju) {
      alert(t('payment/address/jeju-caution'));
      return;
    }
    if (!orderId) {
      return;
    }
    if (serviceType === 'GRADING') {
      mutateGrading(
        {
          id: Number(orderId),
          addressId: address.id || -1,
        },
        {
          onSuccess: (res) => {
            if (res.status === 200) {
              alert(t('account/adress/changed-shipping-destination'));
              queryClient.invalidateQueries(
                queryKeys.gradingOrderById(`${orderId}`)
              );
              onSuccessSave?.();
            } else {
              alert(t('account/adress/error-changed-shipping-destination'));
            }
          },
        }
      );
    } else if (serviceType === 'REHOLDER') {
      mutateReholder(
        {
          id: Number(orderId),
          addressId: address.id || -1,
        },
        {
          onSuccess: (res) => {
            if (res.status === 200) {
              alert(t('account/adress/changed-shipping-destination'));
              queryClient.invalidateQueries(
                queryKeys.reholderOrderById(`${orderId}`)
              );

              onSuccessSave?.();
            } else {
              alert(t('account/adress/error-changed-shipping-destination'));
            }
          },
        }
      );
    }
  };
  return { handleSaveOrderAddress };
}

export default useHandleSaveOrderAddress;
