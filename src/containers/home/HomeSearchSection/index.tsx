import { HStack } from '@/common/components/HStack';
import Box from '@mui/material/Box';
import InputLogo from 'brg-japan/containers/home/HomeSearchSection/InputLogo';
import React, { useRef, useState } from 'react';
import Button from '@mui/base/Button';
import Input, { InputProps, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import SearchIcon from 'brg-japan/containers/home/HomeSearchSection/Icons/SearchIcon';
import useGetGradingOrderById from 'brg-japan/containers/home/HomeSearchSection/hooks/useGetGradingOrderById';
import { useRouter } from 'next/router';
import { HomeQueryParamType } from 'brg-japan/containers/home/shared/queryparam';
import useGetRouterQuery from 'brg-japan/modules/hooks/useGetRouterQuery';
import { VStack } from '@/common/components/VStack';
import HomeSearchContent from 'brg-japan/containers/home/HomeSearchSection/HomeSearchContent';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';

function HomeSearchSection() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [orderNumber, setOrderNumber] = useState('');
  const [q, setQ] = useState('');

  const { data, isLoading, isFetching } = useGetGradingOrderById(Number(q), {
    enabled: q !== '',
  });

  const isDesktop = useIsDesktop();

  const handleChangeOrderNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === '' || /[0-9]+$/.test(event.target.value)) {
      setOrderNumber(event.target.value);
    }
  };

  const handleSearch = () => {
    setQ(orderNumber);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
      if (!isDesktop && inputRef?.current) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <VStack gap="16px">
      <HStack alignItems="center" gap="8px">
        <Box
          width={{ xs: '80px', sm: '120px' }}
          display="flex"
          alignItems="center"
        >
          <InputLogo />
        </Box>
        <HStack flex={1} borderBottom="1px solid #000">
          <CustomInput
            ref={inputRef}
            type="text"
            placeholder="トラッキング番号の入力"
            value={orderNumber}
            onChange={handleChangeOrderNumber}
            onKeyDown={handleKeyDown}
          />
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </HStack>
      </HStack>

      <HomeSearchContent
        open={q !== ''}
        isNoData={!data}
        orderNumber={data?.id}
        processingStatus={data?.gradingOrderProcessingStatus}
      />
    </VStack>
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
