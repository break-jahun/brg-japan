import { GRADING_ORDER_STATUS_INFO } from '@/common/types/grading/gradingOrder';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import {
  ServiceOrderDetailProps,
  ServiceOrderItemAttributes,
  ServiceOrderStatusInfoType,
} from '@/common/types/serviceOrder/serviceOrder';
import { MANUAL_SCORE_DATA } from '@/constants/GRADE';
import useServiceOrderPresentationType from '@/specifics/account/modules/hooks/useServiceOrderPresentationType';
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function OrderItemsListSection({ order }: { order: ServiceOrderDetailProps }) {
  const { presentationType } = useServiceOrderPresentationType(order);

  if (!(order && order.serviceOrderItems && presentationType)) {
    return null;
  }

  return (
    <>
      {order.serviceOrderItems.map((item, index) => {
        return (
          <OrderItem
            key={item.id}
            isReholderOrderItem={order.serviceOrderType === 'REHOLDER'}
            orderItem={item}
            presentationType={presentationType}
            orderItemIndex={index}
            showSerial={order.serviceOrderType === 'REHOLDER'}
          />
        );
      })}
    </>
  );
}

const OrderItem = ({
  isReholderOrderItem,
  orderItem,
  presentationType,
  orderItemIndex,
  showSerial,
}: {
  isReholderOrderItem: boolean;
  orderItem: ServiceOrderItemAttributes;
  presentationType: ServiceOrderStatusInfoType;
  orderItemIndex: number;
  showSerial: boolean;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (
    !GRADING_ORDER_STATUS_INFO.BEFORE_GRADING_COMPLETE_TYPE.includes(
      presentationType
    ) ||
    isReholderOrderItem
  ) {
    return (
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        borderBottom="1px solid #d9d9d9"
        pt={1}
      >
        <GradedScoreLabel orderItem={orderItem} isMobile={isMobile} />
        <Box pl={isMobile ? 0 : '16px'} mt={isMobile ? '4px' : 0}>
          <CardDescriptionSection
            orderItem={orderItem}
            showSerial={showSerial}
          />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      borderBottom="1px solid #d9d9d9"
      pt={1}
    >
      <UngradedContainer
        width={isMobile ? '50px' : 2 / 12}
        minWidth={isMobile ? 0 : '180px'}
      >
        <Typography variant="overline">{orderItemIndex + 1}</Typography>
      </UngradedContainer>
      <Box pl={isMobile ? 0 : '16px'} mt={isMobile ? '4px' : 0}>
        <CardDescriptionSection orderItem={orderItem} />
      </Box>
    </Box>
  );
};

const useGradedScoreLabelParser = ({
  orderItem,
}: {
  orderItem: GradingOrderItemAttributes;
}) => {
  const { t } = useTranslation();
  const labelType = useMemo(() => {
    const isGraded =
      orderItem.isDefectChecked === true && !!orderItem.manualScore; // defectCheck가 되었고, 카드 점수가 부여되었는지 확인

    if (Object.prototype.hasOwnProperty.call(orderItem, 'refundable')) {
      if (orderItem.refundable) {
        return 'REFUNDABLE';
      }
      return 'NON_REFUNDABLE';
    }
    if (isGraded) return 'GRADED';
    return 'NOT_SET';
  }, [orderItem]);

  const label = useMemo(() => {
    if (labelType === 'GRADED') {
      return {
        hasScores: true,
        scoreText: MANUAL_SCORE_DATA.find(
          (data) =>
            data.grade === orderItem.manualScore &&
            data.casing === orderItem.casing
        )?.title,
        autoScoreText:
          orderItem.isAuto && orderItem.isAuto === true && !!orderItem.autoScore
            ? `/ AUTO ${orderItem.autoScore}`
            : '',
      };
    }
    if (labelType === 'REFUNDABLE') {
      return {
        hasScores: false,
        text: t('account-order-grading-info/ungradable'),
      };
    }
    if (labelType === 'NON_REFUNDABLE') {
      return {
        hasScores: false,
        text: t('general/cannot-grade'),
      };
    }
    if (labelType === 'NOT_SET') {
      return {
        hasScores: false,
        text: 'NOT_SET',
      };
    }
    return {};
  }, [labelType, orderItem, t]);
  return {
    label,
  };
};

const GradedScoreLabel = ({
  orderItem,
  isMobile,
}: {
  orderItem: ServiceOrderItemAttributes;
  isMobile: boolean;
}) => {
  const { label } = useGradedScoreLabelParser({ orderItem });
  if (label.hasScores) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={isMobile ? 1 : '180px'}
        height="26px"
        color="white"
        sx={{
          backgroundImage: 'linear-gradient(to right,#417FB3 0%, #55297B 100%)',
          fontWeight: 600,
          fontSize: 12,
        }}
      >
        {label.scoreText} {label.autoScoreText}
      </Box>
    );
  }
  return (
    <UngradedContainer
      width={isMobile ? 1 : 2 / 12}
      minWidth={isMobile ? 0 : '180px'}
    >
      <Typography sx={{ fontSize: 10 }} color="#f50057" fontWeight={900}>
        {label.text}
      </Typography>
    </UngradedContainer>
  );
};
const UngradedContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '42px',
  border: '2px solid #646464',
});

const CardDescriptionSection = ({
  orderItem,
  showSerial,
}: {
  orderItem: ServiceOrderItemAttributes;
  showSerial?: boolean;
}) => {
  const { t } = useTranslation();

  const cardDescription = useMemo(() => {
    if (orderItem.card) {
      return `${orderItem.card.year ?? ''} ${orderItem.card.setName ?? ''} ${
        orderItem.card.description ?? ''
      } ${orderItem.card.limitNumber ?? ''} ${
        orderItem.card.cardNumber ?? ''
      } ${orderItem.card.playerName ?? ''}`;
    }

    return `${orderItem.year ?? ''} ${orderItem.setName ?? ''} ${
      orderItem.description ?? ''
    } ${orderItem.limitNumber ?? ''} ${orderItem.cardNumber ?? ''} ${
      orderItem.playerName ?? ''
    }`;
  }, [orderItem]);
  const minGradeText = useMemo(() => {
    return orderItem.cardMinGrade
      ? `[${t('최소등급신청')} : ${orderItem.cardMinGrade}]`
      : '';
  }, [orderItem, t]);
  return (
    <Box
      width={1}
      padding="0 4px"
      minHeight="48px"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="overline" lineHeight="1">
          {cardDescription}
        </Typography>
        <Typography variant="body2">{minGradeText}</Typography>
        {showSerial && (
          <Typography variant="caption" fontWeight={600} color="gray_700">
            {orderItem.serial}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
export default OrderItemsListSection;
