import {
  Checkbox,
  checkboxClasses,
  CheckboxProps,
  svgIconClasses,
} from '@mui/material';
import { forwardRef, RefObject } from 'react';

const BrgCheckbox = forwardRef((props: CheckboxProps, ref) => {
  return (
    <Checkbox
      ref={ref as RefObject<HTMLButtonElement>}
      sx={(theme) => ({
        width: '24px',
        height: '24px',
        color: theme.palette.secondary_20,

        [`&.${checkboxClasses.checked}`]: {
          color: theme.palette.secondary_20,
        },

        [`& .${svgIconClasses.root}`]: {
          fontSize: '18px',
        },
      })}
      {...props}
    />
  );
});

export default BrgCheckbox;
