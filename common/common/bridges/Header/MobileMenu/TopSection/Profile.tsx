import { VStack } from '@/common/components/VStack';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import useLogoutMutation from '@/common/modules/apiHooks/useLogoutMutation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, styled, Typography } from '@mui/material';

interface ProfileProps {}

function Profile() {
  const { data: userInfo } = useGetUserInfoQuery();

  const { mutate: logout } = useLogoutMutation();

  if (!userInfo) {
    return <Box />;
  }
  return (
    <VStack padding="24px" alignItems="center">
      {userInfo.mbPhoto ? (
        <ProfileImage src={userInfo.mbPhoto} />
      ) : (
        <AccountCircleIcon
          sx={{ color: (theme) => theme.palette.gray_3, fontSize: 64 }}
        />
      )}
      <Typography variant="h5" fontWeight={700}>
        {userInfo.mbName}
      </Typography>
      <Typography variant="body2" color={(theme) => theme.palette.gray_5}>
        {userInfo.mbEmail}
      </Typography>
      <Button
        sx={{
          color: 'black',
          border: (theme) => `1px solid ${theme.palette.gray_3}`,
          padding: '0px 8px',
          marginTop: '8px',
        }}
        onClick={logout}
      >
        LOG OUT
      </Button>
    </VStack>
  );
}

const ProfileImage = styled('img')({
  width: 64,
  height: 64,
  borderRadius: '50%',
});

export default Profile;
