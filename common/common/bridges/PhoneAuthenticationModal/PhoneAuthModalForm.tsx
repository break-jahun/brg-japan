import { useCallback, ChangeEvent, useState } from 'react';
import usePhoneAuthModalFormParser from '@/specifics/auth/modules/hooks/parser/usePhoneAuthModalFormParser';
import {
  Box,
  FormLabel,
  Typography,
  Grid,
  TextField,
  styled,
  Button,
  CircularProgress,
} from '@mui/material';
import {
  useSendVerificationTokenMutation,
  useVerificationCheckMutation,
} from '@/common/modules/hooks/useVerificationQuery';
import { useTranslation } from 'react-i18next';

interface Props {
  handleClose: () => void;
}

const PhoneAuthModalForm = ({ handleClose }: Props) => {
  const { t } = useTranslation();
  const {
    countryCode,
    countryCode82,
    countryKorea,
    phoneNumber,
    receiveAuthNumber,
    authNumber,
    inputAuthNumber,
    generalAccept,
  } = usePhoneAuthModalFormParser();
  const [number, setNumber] = useState('');
  const [authCode, setAuthCode] = useState('');

  const {
    mutate: sendVerificationTokenMutate,
    isLoading: isVerifyPhoneNumberLoading,
    isIdle,
  } = useSendVerificationTokenMutation();
  const {
    mutate: verificationCheckMutate,
    isLoading: isVerificationCheckLoading,
  } = useVerificationCheckMutation(number);

  const handleChangePhoneNumber = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const regex = /^[0-9\b -]{0,13}$/;
      const newPhoneNumber = event.target.value;
      if (regex.test(newPhoneNumber)) {
        if (newPhoneNumber.length === 10) {
          setNumber(
            newPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
          );
          return;
        }
        if (newPhoneNumber.length === 13) {
          setNumber(
            newPhoneNumber
              .replace(/-/g, '')
              .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
          );
          return;
        }
        setNumber(event.target.value);
      }
    },
    []
  );

  const handleRequestVerificationToken = () => {
    const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    if (regExp.test(number)) {
      sendVerificationTokenMutate(number.replace(/-/gi, ''));
    } else {
      alert(t('phone/auth/wrong-number'));
    }
  };

  const handleChangeAuthCode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuthCode(event.target.value);
    },
    []
  );

  const handleVerificationCheck = () => {
    verificationCheckMutate(
      {
        phoneNumber: number.replace(/-/gi, ''),
        code: authCode,
      },
      {
        onSuccess: (res) => {
          const { code } = res;
          if (code === 0) {
            handleClose();
          }
        },
      }
    );
  };

  return (
    <Box sx={{ width: 1, px: 1 }}>
      <Box>
        <FormLabelText>{countryCode}</FormLabelText>
      </Box>
      <Box
        sx={{
          padding: '6px',
          border: '1px solid #c0c0c0',
          borderRadius: '4px',
          display: 'flex',
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold">
          {countryCode82}
        </Typography>
        <Box px={1}>
          <Typography variant="subtitle2" fontWeight="bold">
            {countryKorea}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: ['block', 'flex'],
          alignItems: ['flex-end'],
        }}
      >
        <Grid xs={12} sm={7} item>
          <FormLabelText>{phoneNumber}</FormLabelText>
          <TextField
            fullWidth
            variant="outlined"
            name="phoneNumber"
            size="small"
            value={number}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ maxLength: 20 }}
            onChange={handleChangePhoneNumber}
          />
        </Grid>
        <Grid
          xs={12}
          sm={5}
          item
          sx={{
            ml: [0, 1],
            mt: [1, 0],
          }}
        >
          <ActionButton
            fullWidth
            variant="contained"
            disableElevation
            color="secondary"
            disabled={isVerifyPhoneNumberLoading}
            onClick={handleRequestVerificationToken}
          >
            {isVerifyPhoneNumberLoading ? (
              <CircularProgress size="1.5rem" />
            ) : (
              `${receiveAuthNumber}`
            )}
          </ActionButton>
        </Grid>
      </Box>
      <Box width={1} display="flex" alignItems="flex-end">
        <Grid xs={9} item>
          <FormLabelText>{authNumber}</FormLabelText>
          <TextField
            disabled={isIdle}
            fullWidth
            variant="outlined"
            name="authCode"
            size="small"
            value={authCode}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={inputAuthNumber}
            inputProps={{ maxLength: 20 }}
            onChange={handleChangeAuthCode}
            autoComplete="one-time-code"
          />
        </Grid>
        <Grid xs={3} item>
          <Box pl={1}>
            <ActionButton
              fullWidth
              color="secondary"
              disabled={isIdle}
              variant="contained"
              disableElevation
              onClick={handleVerificationCheck}
            >
              {isVerificationCheckLoading ? (
                <CircularProgress size="1.5rem" />
              ) : (
                `${generalAccept}`
              )}
            </ActionButton>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default PhoneAuthModalForm;

const FormLabelText = styled(FormLabel)({
  fontSize: '0.5rem',
  paddingLeft: 2,
  marginBottom: 5,
});

const ActionButton = styled(Button)({
  borderRadius: '4px',
});
