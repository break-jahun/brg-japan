import { Radio, styled, Typography } from '@mui/material';
import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  isDisabled?: boolean;
}

const ShippingMethodRadioBox = ({ title, children, isDisabled }: Props) => {
  return (
    <RadioBoxWrapper>
      <HStack>
        <Radio
          disabled={isDisabled}
          checked
          name="direct-delivery-buttons"
          size="small"
          sx={{ padding: 0 }}
        />
        <Typography
          variant="body2"
          ml={1}
          color={(theme) => (isDisabled ? theme.palette.gray_4 : 'black')}
        >
          {title}
        </Typography>
      </HStack>
      <InnerWhiteBox>{children}</InnerWhiteBox>
    </RadioBoxWrapper>
  );
};

export default ShippingMethodRadioBox;

const RadioBoxWrapper = styled(VStack)({
  borderRadius: '5px',
  padding: 8,
  backgroundColor: 'rgb(238, 238, 238)',
  marginTop: 16,
});

const InnerWhiteBox = styled(VStack)({
  backgroundColor: 'white',
  borderRadius: 5,
  marginTop: 8,
  padding: '8px 24px',
  alignItems: 'center',
});
