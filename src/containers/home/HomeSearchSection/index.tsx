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

function HomeSearchSection() {
  const query = useGetRouterQuery<HomeQueryParamType>();
  const search = query?.search;

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isFetching } = useGetGradingOrderById(
    Number(search),
    {
      enabled: !!search,
    }
  );

  const [orderNumber, setOrderNumber] = useState('');

  const handleChangeOrderNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (/[0-9]+$/.test(event.target.value)) {
      setOrderNumber(event.target.value);
    }
  };

  const handleSearch = () => {
    const newQuery =
      orderNumber === ''
        ? {}
        : ({ ...query, search: orderNumber } as HomeQueryParamType);
    router.replace(
      router.asPath,
      {
        query: newQuery,
      },
      {
        scroll: false,
      }
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log('event.key', event.key);
    if (event.key === 'Enter') {
      handleSearch();
      if (inputRef?.current) {
        inputRef.current.blur();
      }
    }
  };

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
