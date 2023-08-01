import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { GradingOrderProcessingStatus } from '@/common/types/grading/gradingOrder';
import { Box, Divider, Typography, styled } from '@mui/material';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  open: boolean;
  processingStatus?: GradingOrderProcessingStatus;
  orderNumber?: number;
  isNoData: boolean;
  trackingNumOut?: string;
  trackingNumIn?: string;
};

function HomeSearchContent(props: Props) {
  const {
    open,
    processingStatus,
    orderNumber,
    isNoData,
    trackingNumIn,
    trackingNumOut,
  } = props;

  const orderLocation = getOrderLocation({ trackingNumIn, trackingNumOut });

  return (
    <AnimatePresence initial={false}>
      {open && (
        <ContentBox
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {isNoData ? (
            <Typography variant="body1" fontWeight={500} textAlign="center">
              データを照会できません。
            </Typography>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 5fr',
                '& > div': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingY: '8px',
                },
              }}
            >
              <Box>
                <ColumnText>주문번호</ColumnText>
              </Box>
              <Box>
                <ColumnText>주문건 위치</ColumnText>
              </Box>
              <Divider />
              <Divider />
              <Box>
                <ValueText>{orderNumber}</ValueText>
              </Box>
              <Box>
                <ValueText>{orderLocation}</ValueText>
              </Box>
            </Box>
          )}
        </ContentBox>
      )}
    </AnimatePresence>
  );
}

const ContentBox = styled(motion(Box))({
  overflow: 'hidden',
});

function ColumnText({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body2" fontWeight={400}>
      {children}
    </Typography>
  );
}

function ValueText({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body2" fontWeight={600}>
      {children}
    </Typography>
  );
}

function getOrderLocation({
  trackingNumOut,
  trackingNumIn,
}: {
  trackingNumIn?: string;
  trackingNumOut?: string;
}) {
  if (!trackingNumIn && !trackingNumOut) {
    return '집하지(입고)';
  }
  if (!!trackingNumIn && !!trackingNumOut) {
    return '집하지(출고)';
  }
  return 'brg 그레이딩 센터';
}

export default HomeSearchContent;
