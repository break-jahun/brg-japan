import { ReactChild } from 'react';
import { Box } from '@mui/material';

interface SearchSectionBoxProps {
  children: ReactChild[];
}

function SearchSectionBox({ children }: SearchSectionBoxProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary_20',
        padding: {
          xs: '144px 16px 80px',
          sm: '232px 0 160px',
        },
        color: 'white',
        textAlign: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export default SearchSectionBox;
