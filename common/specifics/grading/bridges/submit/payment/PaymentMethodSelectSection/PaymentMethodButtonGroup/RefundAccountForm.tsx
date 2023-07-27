import { refundAccountState } from '@/common/modules/recoil/gradingOrder';
import {
  Box,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import getBankName from '@/common/utils/getBankName';
import { bankList } from '@/common/types/payment';

const RefundAccountForm = () => {
  const { t } = useTranslation();
  const [refundAccount, setRefundAccountState] =
    useRecoilState(refundAccountState);

  const handleChange = (
    event:
      | SelectChangeEvent<unknown>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setRefundAccountState({
      ...refundAccount,
      [name]: value,
    });
  };

  const parsedBankName = getBankName(refundAccount.bank, t);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: ['center', 'space-between'],
        mb: 1,
      }}
    >
      <Box
        sx={{
          flexBasis: ['100%', '32%'],
        }}
      >
        <StyledFormLabel>
          {t('account/order-cancel/virtualAccount-refund-bank')}
        </StyledFormLabel>
        <Select
          fullWidth
          sx={{
            backgroundColor: 'white',
          }}
          variant="outlined"
          size="small"
          name="bank"
          value={refundAccount.bank}
          placeholder={t('account/order-cancel/virtualAccount-select-bank')}
          onChange={handleChange}
          renderValue={() => <Typography>{parsedBankName}</Typography>}
        >
          {bankList.map((bank) => {
            return (
              <MenuItem key={bank} value={bank}>
                {getBankName(bank, t)}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Box
        sx={{
          flexBasis: ['100%', '32%'],
        }}
      >
        <StyledFormLabel>{t('general/account-number')}</StyledFormLabel>
        <TextField
          fullWidth
          sx={{
            backgroundColor: 'white',
          }}
          onChange={handleChange}
          value={refundAccount.accountNumber}
          variant="outlined"
          autoComplete="off"
          name="accountNumber"
          size="small"
          placeholder={t('account/order-cancel/virtualAccount-numberOnly')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box
        sx={{
          flexBasis: ['100%', '32%'],
        }}
      >
        <StyledFormLabel>{t('general/account-holder')}</StyledFormLabel>
        <TextField
          fullWidth
          sx={{ backgroundColor: 'white' }}
          onChange={handleChange}
          value={refundAccount.holderName}
          variant="outlined"
          autoComplete="off"
          name="holderName"
          size="small"
          placeholder={t('account/order-cancel/virtualAccount-enter-name')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Box>
  );
};

export default RefundAccountForm;

const StyledFormLabel = styled(FormLabel)({
  fontSize: '0.7rem',
  marginBottom: '5px',
  display: 'flex',
});
