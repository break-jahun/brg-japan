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
  estimatedGradingCompleteDate?: string;
  isNoData: boolean;
};

function HomeSearchContent(props: Props) {
  const {
    open,
    processingStatus,
    orderNumber,
    estimatedGradingCompleteDate,
    isNoData,
  } = props;

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
                gridTemplateColumns: '1fr 4fr 1fr',
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
                <ColumnText>그레이딩 진행상황</ColumnText>
              </Box>
              <Box>
                <ColumnText>출고 예정일</ColumnText>
              </Box>
              <Divider />
              <Divider />
              <Divider />
              <Box>
                <ValueText>{orderNumber}</ValueText>
              </Box>
              <Box>
                <ValueText>{processingStatus}</ValueText>
              </Box>
              <Box>
                <ValueText>
                  {dayjs(estimatedGradingCompleteDate).format('YYYY.MM.DD')}
                </ValueText>
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

export default HomeSearchContent;
