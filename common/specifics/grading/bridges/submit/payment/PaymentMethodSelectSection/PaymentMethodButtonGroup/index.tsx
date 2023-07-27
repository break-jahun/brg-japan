import {
  gradingOrderAtom,
  gradingOrderState,
  paymentMethodState,
} from '@/common/modules/recoil/gradingOrder';
import usePaymentMethodSelectGroupParser from '@/specifics/grading/modules/hooks/parser/usePaymentMethodSelectGroupParser';
import { Box, ToggleButtonGroup } from '@mui/material';
import { useRecoilState, useSetRecoilState } from 'recoil';
import RefundAccounSection from './RefundAccounSection';
import ToggleButtonItem from './ToggleButtonItem';

const PaymentMethodButtonGroup = () => {
  const {
    quickPay,
    card,
    accountTransfer,
    virtualAccount,
    mobilePayment,
    tossPay,
    kakaoPay,
  } = usePaymentMethodSelectGroupParser();
  const [method, setMethod] = useRecoilState(paymentMethodState);
  const setGradingOrder = useSetRecoilState(gradingOrderAtom);

  return (
    <Box py={2}>
      <ToggleButtonGroup
        exclusive
        sx={{
          display: 'flex',
          flexFlow: 'wrap',
          mb: 2,
        }}
      >
        <ToggleButtonItem
          active={method === 'CONNECT_PAY'}
          text={quickPay}
          onClick={() => {
            setMethod('CONNECT_PAY');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'CONNECT_PAY',
            }));
          }}
        />
        <ToggleButtonItem
          active={method === 'CARD'}
          text={card}
          onClick={() => {
            setMethod('CARD');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'CARD',
            }));
          }}
        />
        <ToggleButtonItem
          active={method === 'ACCOUNT_TRANSFER'}
          text={accountTransfer}
          onClick={() => {
            setMethod('ACCOUNT_TRANSFER');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'ACCOUNT_TRANSFER',
            }));
          }}
        />
        <ToggleButtonItem
          active={method === 'VIRTUAL_ACCOUNT'}
          text={virtualAccount}
          onClick={() => {
            setMethod('VIRTUAL_ACCOUNT');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'VIRTUAL_ACCOUNT',
            }));
          }}
        />
        <ToggleButtonItem
          active={method === 'PHONE'}
          text={mobilePayment}
          onClick={() => {
            setMethod('PHONE');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'PHONE',
            }));
          }}
        />
        <ToggleButtonItem
          active={method === 'TOSS_PAY'}
          text={tossPay}
          onClick={() => {
            setMethod('TOSS_PAY');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'TOSS_PAY',
            }));
          }}
        />
        <ToggleButtonItem
          active={method === 'KAKAO_PAY'}
          text={kakaoPay}
          onClick={() => {
            setMethod('KAKAO_PAY');
            setGradingOrder((prev) => ({
              ...prev,
              paymentMethod: 'KAKAO_PAY',
            }));
          }}
        />
      </ToggleButtonGroup>
      {method === 'VIRTUAL_ACCOUNT' && <RefundAccounSection />}
    </Box>
  );
};

export default PaymentMethodButtonGroup;
