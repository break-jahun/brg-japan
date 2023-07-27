import { FormLabel, Typography } from '@mui/material';
import { ReactNode, memo } from 'react';

interface Props {
  children: ReactNode;
}

const FormLabelText = ({ children }: Props) => {
  return (
    <FormLabel sx={{ mb: 5 }}>
      <Typography variant="caption">{children}</Typography>
    </FormLabel>
  );
};

export default memo(FormLabelText);
