import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { Box, IconButton, Popover, styled, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import PopoverList from '@/common/bridges/Header/PCMenu/Profile/PopoverList';
import useLogoutMutation from '@/common/modules/apiHooks/useLogoutMutation';

interface ProfileProps {}

function Profile() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { data: userInfo } = useGetUserInfoQuery();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  if (!userInfo) {
    return <Box />;
  }
  return (
    <Box>
      <IconButton
        aria-describedby={id}
        sx={{ padding: 0 }}
        onClick={handleClick}
      >
        {userInfo.mbPhoto ? (
          <ProfileImage src={userInfo.mbPhoto} />
        ) : (
          <AccountCircleIcon
            sx={{ color: (theme) => theme.palette.gray_3, fontSize: 35 }}
          />
        )}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PopoverList />
      </Popover>
    </Box>
  );
}

const ProfileImage = styled('img')({
  width: 35,
  height: 35,
  borderRadius: '50%',
});

export default Profile;
