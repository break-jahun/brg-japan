import {
  Box,
  inputClasses,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { ReactNode, forwardRef, RefObject } from 'react';
import { useTranslation } from 'react-i18next';

// placeholder

interface Props {
  children: ReactNode;
  buttonText: string;
  onSubmit: () => void;
}
const AccountForm = ({ children, buttonText, onSubmit }: Props) => {
  const { t } = useTranslation();

  return (
    <Box
      component="form"
      sx={{
        maxWidth: '328px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        margin: '16px auto 0',

        [`& .${inputClasses.input}`]: {
          padding: '12px 6px',
        },
      }}
      onSubmit={onSubmit}
    >
      {children}
      <Box
        component="button"
        sx={(theme) => ({
          width: '100%',
          backgroundColor: theme.palette.secondary_20,
          boxShadow:
            '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          borderRadius: '28px',
          paddingY: '14px',
          color: 'white',
        })}
        type="submit"
      >
        {buttonText}
      </Box>
      <Link href="/login" passHref>
        <Typography
          color="secondary_20"
          fontWeight={500}
          variant="button"
          sx={(theme) => ({
            textDecorationLine: 'underline',
            textDecorationColor: theme.palette.secondary_20,
            textUnderlineOffset: '2px',
          })}
        >
          {t('find-5')}
        </Typography>
      </Link>
    </Box>
  );
};

export default AccountForm;

export const AccountFormTextField = forwardRef((props: TextFieldProps, ref) => {
  return (
    <TextField
      fullWidth
      variant="standard"
      color="secondary"
      {...props}
      ref={ref as RefObject<HTMLInputElement>}
    />
  );
});
