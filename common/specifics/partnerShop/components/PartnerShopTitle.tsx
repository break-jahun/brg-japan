import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PartnerShopTitle({ children }: Props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width={1}
      height={{ xs: '472px', sm: '524px' }}
      bgcolor="secondary_20"
      padding={{ xs: '224px 0px 160px' }}
    >
      {children}
    </Box>
  );
}

export default PartnerShopTitle;
