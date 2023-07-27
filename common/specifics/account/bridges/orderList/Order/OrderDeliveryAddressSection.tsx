import AddressListModal from '@/common/bridges/AddressListModal';
import { CommonButton } from '@/common/components/Button';
import ObjectTable from '@/common/components/ObjectTable';
import useHandleSaveOrderAddress from '@/common/modules/hooks/useHandleSaveOrderAddress';
import useOpen from '@/common/modules/hooks/useOpen';
import { GRADING_ORDER_STATUS_INFO } from '@/common/types/grading/gradingOrder';
import {
  ServiceOrderAttributes,
  ServiceOrderDetailProps,
  ServiceOrderStatusInfoType,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import { AddressAttributes } from '@/common/types/user/address';
import { Box, Modal, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface OrderDeliveryAddressSectionProps {
  presentationType: ServiceOrderStatusInfoType;
  address: AddressAttributes;
  serviceType: ServiceType;
  orderId: number | undefined;
  order?: ServiceOrderDetailProps;
  refetch: () => void;
}
function OrderDeliveryAddressSection({
  presentationType,
  address,
  serviceType = 'GRADING',
  orderId,
  refetch,
  order,
}: OrderDeliveryAddressSectionProps) {
  const { t } = useTranslation();
  const { open: isOpen, handleClose, handleOpen } = useOpen();

  const isDisabled =
    order?.serviceOrderProcessingStatus === 'CARD_DEFECT_CHECKED' ||
    order?.serviceOrderProcessingStatus === 'CARD_SCORED' ||
    order?.serviceOrderProcessingStatus === 'CASING_COMPLETE' ||
    order?.serviceOrderProcessingStatus === 'SHIPPING_OUT' ||
    order?.serviceOrderProcessingStatus === 'SHIPPING_OUT_COMPLETE';

  const { handleSaveOrderAddress: handleSaveGradingOrderAddress } =
    useHandleSaveOrderAddress({
      serviceType,
      orderId,
      onSuccessSave: () => {
        handleClose();
        refetch();
      },
    });
  const refreshOrderItem = () => {};
  const keys = [
    {
      text: t('general/address'),
      value: 'title',
    },
    {
      text: t('general/recipient'),
      value: 'name',
    },
    {
      text: t('general/phone-number'),
      value: 'phone',
    },
    {
      text: t('general/address2'),
      value: 'address',
    },
    {
      text: t('general/memo'),
      value: 'memo',
    },
  ];

  const showAddressFixLastStepText = useMemo(() => {
    if (serviceType === 'REHOLDER') {
      return (
        order && order.serviceOrderProcessingStatus === 'SHIPPING_IN_COMPLETE'
      );
    }
    return order && order.serviceOrderProcessingStatus === 'VSC_CHECKED';
  }, [order, serviceType]);

  return (
    <Box textAlign="center" width={1}>
      <ObjectTable item={address as any} keys={keys} />
      {/* CASING_COMPLETE 제외 나머지 큰 것들 수정하면 사이드이펙트가 더 커서 컴포넌트 자체에 리홀더 전체 받아서 처리 (1.0과 동일하게)) */}
      {showAddressFixLastStepText && (
        <Box width={1} textAlign="left" pl="4px" pt={1}>
          <Typography variant="body2" color="red" fontWeight={700}>
            {t('general/address-fix-last-step')}
          </Typography>
        </Box>
      )}
      {GRADING_ORDER_STATUS_INFO.ADDRESS_CHANGEABLE_TYPE.includes(
        presentationType
      ) && (
        <Box mt={2} width={1}>
          <CommonButton
            buttonType="GRAY"
            onClick={handleOpen}
            fullWidth
            disabled={isDisabled}
          >
            {t('general/address-fix')}
          </CommonButton>
        </Box>
      )}
      <Modal open={isOpen}>
        <AddressListModal
          handleClose={handleClose}
          handleSaveClick={handleSaveGradingOrderAddress}
          selectedItem={address || undefined}
          onModifySuccess={refreshOrderItem}
        />
      </Modal>
    </Box>
  );
}
export default OrderDeliveryAddressSection;
