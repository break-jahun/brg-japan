import TitledSection from '@/common/components/Account/TitledSection';
import { CommonButton } from '@/common/components/Button';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function useBasicInfoModifySectionParser() {
  const { data: userInfo } = useGetUserInfoQuery();

  const { t } = useTranslation();
  const text = {
    sectionTitle: t('general/basic-info'),
    button: t('account/profile/pw-change'),
    currentPassword: t('account/profile/current-pw'),
    newPassword: t('account/profile/new-pw'),
    confirmPassword: t('account/profile/confirm-pw'),
    passwordRule: t('account/profile/please-abide-pw-rules'),
  };
  return {
    userInfo,
    text,
  };
}

function BasicInfoModifySection() {
  const { userInfo, text } = useBasicInfoModifySectionParser();
  return (
    <TitledSection title={text.sectionTitle}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
        width="100%"
      >
        {userInfo && (
          <>
            <Avatar sx={{ width: 100, height: 100 }} src={userInfo.mbPhoto} />
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
            <TextField
              sx={{ mt: 3, mb: 1 }}
              fullWidth
              size="small"
              label={text.currentPassword}
            />
            <TextField
              sx={{ m: 1 }}
              fullWidth
              size="small"
              label={text.newPassword}
            />
            <TextField
              sx={{ m: 1 }}
              fullWidth
              size="small"
              label={text.confirmPassword}
            />
            <Box m={2}>
              <Typography color="gray_700" variant="caption">
                {text.passwordRule}
              </Typography>
            </Box>
            <Box mt={2} width="100%">
              <CommonButton buttonType="GRAY" fullWidth>
                {text.button}
              </CommonButton>
            </Box>
          </>
        )}
      </Box>
    </TitledSection>
  );
}
export default BasicInfoModifySection;
