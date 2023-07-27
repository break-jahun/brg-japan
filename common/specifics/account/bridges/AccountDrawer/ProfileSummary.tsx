import { CommonButton } from '@/common/components/Button';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { Box, Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

function ProfileSummary() {
  const { data: userInfo } = useGetUserInfoQuery();
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      pt={2}
      pb={3}
      height="245px"
    >
      {userInfo && (
        <>
          <Avatar sx={{ width: 72, height: 72 }} src={userInfo.mbPhoto} />
          <Box mt={2}>
            <Typography color="textPrimary" variant="h6" fontWeight={700}>
              {userInfo.mbName}
            </Typography>
          </Box>
          <Typography color="textSecondary" variant="caption">
            {userInfo.mbEmail}
          </Typography>
          <Typography color="textSecondary" variant="caption">
            {userInfo.mbPhone}
          </Typography>
          <Box mt={2}>
            <CommonButton
              buttonType="GRAY"
              onClick={() => router.push(`/account/profile`)}
            >
              {t('general/go-to-modify')}
            </CommonButton>
          </Box>
        </>
      )}
    </Box>
  );
}

export default ProfileSummary;
