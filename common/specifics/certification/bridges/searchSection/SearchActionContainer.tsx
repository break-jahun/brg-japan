import { Box, styled, Typography } from '@mui/material';
import { FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import SecondaryButton from '@/common/components/Button/SecondaryButton';
import { useTranslation } from 'react-i18next';
import * as gtag from '@/common/utils/ga';

function SearchActionContainer() {
  const router = useRouter();
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    const onlyNumberValue = e.target.value.replace(/[^0-9]/g, '');

    setValue(onlyNumberValue);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    gtag.search(value);
    router.push(`/certification/${value}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Box
        sx={{
          marginBottom: { xs: '40px', sm: '0' },
          width: {
            sm: '492px',
          },
        }}
      >
        <StyledInput
          placeholder={t('certification-2')}
          onFocus={(e) => {
            e.target.placeholder = '';
          }}
          onBlur={(e) => {
            e.target.placeholder = t('certification-2');
          }}
          onChange={handleChange}
          type="text"
          value={value}
        />
      </Box>
      <SecondaryButton
        sx={{
          padding: '14px 28.5px',
          width: { xs: '100%', sm: 'auto' },
        }}
        type="submit"
      >
        <Typography fontWeight={500} textTransform="initial" variant="button">
          {t('certification-3')}
        </Typography>
      </SecondaryButton>
    </StyledForm>
  );
}
export default SearchActionContainer;

const StyledInput = styled('input')({
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid white',
  background: 'transparent',
  padding: '12px 0',
  color: 'white',
  WebkitBorderRadius: 0,

  '&::placeholder': {
    color: 'white',
    opacity: 0.5,
  },
});

const StyledForm = styled('form')(({ theme }) => ({
  marginTop: '64px',

  [theme.breakpoints.up('sm')]: {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  },
}));
