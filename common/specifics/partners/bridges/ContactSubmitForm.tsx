import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  styled,
  TextField,
  Typography,
  circularProgressClasses,
  buttonClasses,
  inputBaseClasses,
  outlinedInputClasses,
  SxProps,
  CircularProgress,
  Button,
} from '@mui/material';
import { ReactNode } from 'react';
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useContactMailMutation } from '@/specifics/partners/modules/apihooks/useContactMailQuery';

interface FormType {
  company: string;
  phoneNumber: string;
  email: string;
  description: string;
}

const ContactSubmitForm = () => {
  const { t } = useTranslation();

  const { mutate, isLoading } = useContactMailMutation();

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

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm: SubmitHandler<FormType> = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        reset();
      },
    });
  };

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

  return (
    <MainContainer>
      <StyledForm
        noValidate
        onSubmit={handleSubmit(handleSubmitForm, handleSubmitError)}
      >
        <InputContainer>
          <ContactFormController
            sx={{
              flexGrow: 1,
              flexBasis: ['40%', 'unset'],
              margin: ['0 16px 16px 0', 0],
            }}
            label={t('general/company')}
          >
            <Controller
              name="company"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  {...register('company')}
                  hiddenLabel
                  variant="outlined"
                  name="company"
                  fullWidth
                  value={value || ''}
                  onChange={onChange}
                  error={!!errors.company?.message}
                  placeholder={`${t('general/company')}`}
                />
              )}
            />
          </ContactFormController>
          <ContactFormController
            label={t('general/contact-info')}
            sx={{ flexGrow: 1, flexBasis: ['40%', 'unset'] }}
          >
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  {...register('phoneNumber')}
                  hiddenLabel
                  variant="outlined"
                  name="phoneNumber"
                  fullWidth
                  value={value || ''}
                  onChange={onChange}
                  error={!!errors.phoneNumber?.message}
                  placeholder="000-0000-000"
                />
              )}
            />
          </ContactFormController>
          <ContactFormController label="E-mail" sx={{ flexGrow: 1 }}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  {...register('email')}
                  variant="outlined"
                  name="email"
                  fullWidth
                  value={value || ''}
                  onChange={onChange}
                  error={!!errors.email?.message}
                  placeholder="***@****.**"
                />
              )}
            />
          </ContactFormController>
        </InputContainer>
        <ContactFormController label={t('general/description')}>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                {...register('description')}
                multiline
                rows={5}
                sx={{
                  '& .MuiOutlinedInput-input': {
                    height: '166px',
                  },
                }}
                variant="outlined"
                name="description"
                fullWidth
                value={value || ''}
                onChange={onChange}
                error={!!errors.description?.message}
                placeholder={`${t('partners/collaboration-idea')}`}
              />
            )}
          />
        </ContactFormController>
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'flex-end',
            mt: { xs: '20px', sm: '30px' },
            [`& .${buttonClasses.root}`]: {
              padding: '8px 31px',
              backgroundColor: theme.palette.white,

              '&. hover': {
                backgroundColor: 'transparent',
              },
            },
          })}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              minWidth: '96px',
            }}
          >
            <Typography
              color="primary"
              fontWeight={700}
              sx={(theme) => ({
                [`& .${circularProgressClasses.colorPrimary}`]: {
                  color: theme.palette.primary.main,
                },
              })}
            >
              {isLoading ? (
                <CircularProgress size="1.5rem" />
              ) : (
                t('partners/send-mail')
              )}
            </Typography>
          </Button>
        </Box>
      </StyledForm>
    </MainContainer>
  );
};

export default ContactSubmitForm;

interface Props {
  label: string;
  children: ReactNode;
  sx?: SxProps;
}

const ContactFormController = ({ label, sx, children }: Props) => {
  return (
    <Box sx={sx}>
      <Typography sx={{ mb: '6px', color: 'white', fontWeight: 700 }}>
        {label}
      </Typography>
      {children}
    </Box>
  );
};

const MainContainer = styled(Box)(({ theme }) => ({
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#27282c',
  backgroundImage: `url('/images/contact_us_background_image_mobile.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  [theme.breakpoints.up('sm')]: {
    backgroundImage: `url('/images/contact_us_background_image.png')`,
  },
}));
const StyledForm = styled('form')(({ theme }) => ({
  [`& .${inputBaseClasses.root}`]: {
    fontSize: '14px',
  },
  [`& .${outlinedInputClasses.input}`]: {
    backgroundColor: theme.palette.white,
    padding: '10px 14px',
    height: '20px',
    borderRadius: '4px',
  },
  [`& .${inputBaseClasses.multiline}`]: {
    padding: 0,
  },

  width: '100%',

  [theme.breakpoints.up('sm')]: {
    width: '829px',
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'wrap',
  marginBottom: '10px',

  [theme.breakpoints.up('sm')]: {
    marginBottom: '27px',
    justifyContent: 'space-between',
    gap: '84px',
    flexFlow: 'nowrap',
  },
}));
