import ObjectTable from '@/common/components/ObjectTable';
import useConvertDataToText from '@/common/modules/hooks/useConvertDataToText';
import useDateUtils from '@/common/modules/hooks/useDateUtils';
import {
  ServiceOrderDetailProps,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Box, Typography } from '@mui/material';
import { CommonButton } from '@/common/components/Button';
import useItemSummary from '@/common/modules/hooks/useItemSummary';
import { GradingSubmitType } from '@/common/types/grading/gradingOrder';
import usePaymentUtil from '@/specifics/account/modules/hooks/usePaymentUtil';

interface OrderPaymentInfoSectionProps {
  order: ServiceOrderDetailProps;
  serviceType: ServiceType;
}
function OrderPaymentInfoSection({
  order,
  serviceType,
}: OrderPaymentInfoSectionProps) {
  const { t } = useTranslation();
  const { getDateWithFullInfo } = useDateUtils();
  const { getServiceOrderTypeInFullName, priceUnit } = useConvertDataToText();
  const { getPaymentMethodText, getPaymentStatus } = usePaymentUtil();
  const { itemSummary } = useItemSummary({
    orderItems: order.serviceOrderItems,
    serviceType,
  });
  const orderSummaryContents = itemSummary
    .map((summary) => {
      return summary.content.map((c) => {
        return {
          content: c,
          summary,
        };
      });
    })
    .flat();

  const totalCancelAmount = useMemo(() => {
    const result =
      _.sumBy(order?.payment?.cancel_history, (item) => item.cancelAmount) ?? 0;
    if (result === 0) {
      return order?.payment?.cancel_amount ?? 0;
    }
    return result;
  }, [order]);

  const hasDiscountPrice = useMemo(() => {
    return (order.discountPrice ?? 0) > 0;
  }, [order]);
  const hasDeliveryDiscountAmount = useMemo(() => {
    return (order.deliveryDiscountAmount ?? 0) > 0;
  }, [order]);
  const hasRefundAmount = useMemo(() => {
    return totalCancelAmount !== 0;
  }, [totalCancelAmount]);

  const item = useMemo(() => {
    if (!order.payment) {
      return {};
    }
    const defaultItem: any = {
      id: order.id,
      createdAt: getDateWithFullInfo(order.createdAt),
      serviceOrderType: getServiceOrderTypeInFullName(order.serviceOrderType),
      discountPrice: `${order.discountPrice?.toLocaleString()} ${priceUnit}`,
      deliveryDiscountAmount: `${order.deliveryDiscountAmount?.toLocaleString()} ${priceUnit}`,
      totalPrice: `${order.totalPrice?.toLocaleString()} ${priceUnit}`,
      deliveryCost: `${order.deliveryCost?.toLocaleString()} ${priceUnit}`,
      paymentMethod: getPaymentMethodText(order.paymentMethod),
      paymentStatus: getPaymentStatus(order.payment),
      receipt_url: order.payment?.receipt_url,
      refundAmount: `${totalCancelAmount.toLocaleString()} ${priceUnit}`,
      paymentAmount: `${order.totalAmount?.toLocaleString()} ${priceUnit}`,
      REHOLDER: `${order.serviceOrderItems?.length} ${t('general/a-sheet')} X ${
        order.serviceOrderItems &&
        order.serviceOrderItems[0]?.amount?.toLocaleString()
      } ${priceUnit}`,
    };
    if (orderSummaryContents.length > 0) {
      orderSummaryContents.forEach((summaryContent) => {
        const { content, summary } = summaryContent;
        defaultItem[summary.name + content.name] = `${content.quantity} ${t(
          'general/a-sheet'
        )} X ${content.price} ${content.unit}`;
      });
    }
    return defaultItem;
  }, [
    getDateWithFullInfo,
    getPaymentMethodText,
    getPaymentStatus,
    getServiceOrderTypeInFullName,
    order,
    orderSummaryContents,
    priceUnit,
    t,
    totalCancelAmount,
  ]);

  const orderSummaryKeys = useMemo(() => {
    if (order.serviceOrderType === 'REHOLDER') {
      return [
        {
          text: t('general/reholder'),
          value: 'REHOLDER',
        },
      ];
    }
    return orderSummaryContents.map((summaryContent) => {
      const { content, summary } = summaryContent;

      return {
        text: '',
        textElement: (
          <Box sx={{ fontWeight: 'bold' }}>
            {summary.name} <br />
            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
              ({content.name})
            </Typography>
          </Box>
        ),
        value: summary.name + content.name,
      };
    });
  }, [order.serviceOrderType, orderSummaryContents, t]);

  const keys = useMemo(() => {
    const defaultKeys = [
      {
        text: t('orderID-15'),
        value: 'id',
      },
      {
        text: t('orderID-16'),
        value: 'createdAt',
      },
      {
        text: t('orderID-17'),
        value: 'serviceOrderType',
      },
    ];
    const discountPriceKey = hasDiscountPrice
      ? [
          {
            text: t('할인금액'),
            color: '#FF3030',
            value: 'discountPrice',
          },
        ]
      : [];
    const deliveryDiscountAmountKey = hasDeliveryDiscountAmount
      ? [
          {
            text: t('배송비할인금액'),
            color: '#FF3030',
            value: 'deliveryDiscountAmount',
          },
        ]
      : [];
    const refundAmountKey = hasRefundAmount
      ? [
          {
            text: t('talk-63'),
            value: 'refundAmount',
          },
        ]
      : [];
    return defaultKeys.concat(
      orderSummaryKeys,
      [
        {
          text: t('orderID-18'),
          value: 'totalPrice',
        },
        {
          text: t('orderID-19'),
          value: 'deliveryCost',
        },
      ],
      discountPriceKey,
      deliveryDiscountAmountKey,
      refundAmountKey,
      [
        {
          text: t('orderID-20'),
          value: 'paymentAmount',
        },
        {
          text: t('orderID-21'),
          value: 'paymentMethod',
        },
        {
          text: t('orderID-22'),
          value: 'paymentStatus',
        },
      ]
    );
  }, [
    t,
    hasDiscountPrice,
    hasDeliveryDiscountAmount,
    hasRefundAmount,
    orderSummaryKeys,
  ]);
  return (
    <Box>
      <ObjectTable item={item} keys={keys} />
      {order.paymentMethod === 'CARD' && (
        <Box mt={1}>
          <CommonButton
            buttonType="OUTLINED"
            href={order.payment?.receipt_url}
            fullWidth
          >
            {t('general/receipt')}
          </CommonButton>
        </Box>
      )}
    </Box>
  );
}

export default OrderPaymentInfoSection;
