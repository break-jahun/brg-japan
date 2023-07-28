import { HStack } from '@/common/components/HStack';
import Box from '@mui/material/Box';
import InputLogo from 'brg-japan/containers/home/HomeSearchSection/InputLogo';
import React from 'react';
import Button from '@mui/base/Button';
import Input, { InputProps, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import SearchIcon from 'brg-japan/containers/home/HomeSearchSection/Icons/SearchIcon';

function HomeSearchSection() {
  return (
    <HStack alignItems="center" gap="8px">
      <Box
        width={{ xs: '80px', sm: '120px' }}
        display="flex"
        alignItems="center"
      >
        <InputLogo />
      </Box>
      <HStack flex={1} borderBottom="1px solid #000">
        <CustomInput placeholder="トラッキング番号の入力" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </HStack>
    </HStack>
  );
}

const CustomInput = styled('input')({
  padding: '12px 8px',
  width: '100%',
  '::placeholder': {
    color: 'rgba(0, 0, 0, 0.36)',
    fontSize: '16px',
    fontWeight: 400,
  },
});

const IconButton = styled(Button)({});

export default HomeSearchSection;
