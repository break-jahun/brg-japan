import {
  PasswordFormLabels,
  PasswordFormType,
} from '@/specifics/account/bridges/profile/BasicInfoModifySection/PasswordFormGroup';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import {
  Control,
  Controller,
  FieldError,
  UseFormRegister,
} from 'react-hook-form';

interface PasswordFormItemProps {
  name: PasswordFormLabels;
  label: string;
  hookFormControllers: {
    control: Control<PasswordFormType, object>;
    error: FieldError | undefined;
    register: UseFormRegister<PasswordFormType>;
  };
}

function PasswordFormItem({
  name,
  label,
  hookFormControllers,
}: PasswordFormItemProps) {
  const { control, error, register } = hookFormControllers;

  return (
    <FormControl fullWidth variant="outlined">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Box m={1}>
            <TextField
              type="password"
              key={label}
              fullWidth
              size="small"
              label={label}
              {...register(name)}
              onChange={onChange}
              value={value || ''}
              color="secondary"
            />
            <Typography variant="caption" color="red">
              {error && error.message}
            </Typography>
          </Box>
        )}
      />
    </FormControl>
  );
}

export default PasswordFormItem;
