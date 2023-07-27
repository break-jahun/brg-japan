import {
  Box,
  Grid,
  outlinedInputClasses,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useContactMailMutation } from '@/specifics/partners/modules/apihooks/useContactMailQuery';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import * as yup from 'yup';
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormType {
  name: string;
  phoneNumber: string;
  email: string;
  company: string;
  country: string;
  description: string;
}

interface Props {
  onSuccessSubmit?: () => void;
}

function ContactUs({ onSuccessSubmit }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const { mutate } = useContactMailMutation();

  const schema = yup.object().shape(
    {
      company: yup.string().required(t('partners/required/company')),
      phoneNumber: yup
        .string()
        .matches(/^[0-9\b -]{0,13}$/, t('phone/auth/wrong-number'))
        .when('email', {
          is: (email: string) => Boolean(!email),
          then: yup
            .string()
            .required(t('partners/required/contact-Information')),
          otherwise: yup.string().nullable(),
        }),
      email: yup
        .string()
        .email(t('signup/alert/verification-failed-email'))
        .when('phoneNumber', {
          is: (phoneNumber: string) => Boolean(!phoneNumber),
          then: yup.string().required(t('signup/required/email')),
          otherwise: yup.string().nullable(),
        }),
      description: yup.string().required(t('partners/required/description')),
    },
    [['phoneNumber', 'email']]
  );

  const handleSubmitError = (error: FieldErrors) => {
    if (error.company?.message) {
      alert(error.company?.message);
    } else if (error.email?.message && error.phoneNumber?.message) {
      alert(t('partners/required/contact-Info-or-email'));
    } else if (error.email?.message) {
      alert(error.email?.message);
    } else if (error.phoneNumber?.message) {
      alert(error.phoneNumber?.message);
    } else if (error.description?.message) {
      alert(error.description?.message);
    }
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm: SubmitHandler<FormType> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        onSuccessSubmit?.();
      },
    });
  };

  return (
    <Box
      bgcolor="secondary_20"
      sx={{
        paddingTop: '80px',
      }}
      component="section"
    >
      <Box
        sx={{
          maxWidth: '768px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '24px', sm: '16px' },
          }}
        >
          <ResponsiveFamilyTypography
            color="white"
            variant={isMobile ? 'h4' : 'h3'}
            align="center"
            fontWeight={600}
          >
            {t('문의하기')}
          </ResponsiveFamilyTypography>
          <Typography
            align="center"
            variant={isMobile ? 'body1' : 'subtitle1'}
            margin={isMobile ? '0px 16px 40px 16px' : '0px 32px 40px 32px'}
            color="white"
          >
            {t('문의작성안내')}
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={{ xs: '0px 16px 16px 16px', sm: '0px 32px 24px 32px' }}
          sx={{
            [`& .${outlinedInputClasses.input}`]: {
              padding: '12px 16px',
            },
          }}
        >
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  {...register('name')}
                  name="name"
                  variant="outlined"
                  fullWidth
                  placeholder={t('폼이름')}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  {...register('phoneNumber')}
                  name="phoneNumber"
                  variant="outlined"
                  fullWidth
                  placeholder={t('폼전화번호')}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  {...register('email')}
                  name="email"
                  variant="outlined"
                  fullWidth
                  placeholder={t('폼이메일')}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="company"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  {...register('company')}
                  name="company"
                  variant="outlined"
                  fullWidth
                  placeholder={t('폼샵이름')}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="country"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  {...register('country')}
                  name="country"
                  variant="outlined"
                  fullWidth
                  placeholder={t('폼국가')}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  {...register('description')}
                  name="decsription"
                  variant="outlined"
                  fullWidth
                  placeholder={t('폼내용')}
                  value={value || ''}
                  onChange={onChange}
                  multiline
                  sx={{
                    [`& .${outlinedInputClasses.input}`]: {
                      height: '224px !important',
                    },
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          paddingBottom="80px"
          paddingX={{ xs: '16px', sm: 0 }}
        >
          <SubmitButton
            component="button"
            onClick={handleSubmit(handleSubmitForm, handleSubmitError)}
          >
            <Typography variant="button">{t('제출하기')}</Typography>
          </SubmitButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;

const SubmitButton = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary_40,
  color: 'white',
  borderRadius: '50px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '52px',
  userSelect: 'none',

  [theme.breakpoints.up('sm')]: {
    width: '160px',
  },
}));

const CustomInput = styled(TextField)({
  [`& .${outlinedInputClasses.root}`]: {
    backgroundColor: 'white',
    padding: '0',
  },
});
