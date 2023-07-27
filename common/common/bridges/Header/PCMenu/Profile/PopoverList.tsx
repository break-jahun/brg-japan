import { VStack } from '@/common/components/VStack';
import { Box, Button, styled, Typography } from '@mui/material';
import useLogoutMutation from '@/common/modules/apiHooks/useLogoutMutation';
import Link from 'next/link';

interface PopoverListProps {}

function PopoverList() {
  const { mutate: logout } = useLogoutMutation();
  return (
    <VStack paddingY={1}>
      <ListItem>
        <Button onClick={logout} sx={{ color: 'black', padding: 0 }}>
          <Typography variant="body1" fontWeight={400}>
            LOG OUT
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Link href="/account/dashboard" passHref>
          <Typography variant="body1" fontWeight={400}>
            MY PAGE
          </Typography>
        </Link>
      </ListItem>
    </VStack>
  );
}

const ListItem = styled(Box)({
  padding: '5px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default PopoverList;
