/* eslint-disable @next/next/no-img-element */
import { FormWhiteButton } from '@/common/components/Button/FormButton';
import {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from '@/common/modules/hooks/useFacebookLogin';
import { Typography } from '@mui/material';

interface Props {
  onSuccess: (res: ReactFacebookLoginInfo) => void;
  onFail: () => void;
  text: string;
}

interface FacebookAuthResponse {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse: ReactFacebookLoginInfo;
}

const FacebookAuthButton = ({ onSuccess, onFail, text }: Props) => {
  const handleClick = () => {
    (window as any).FB.login(
      (response: FacebookAuthResponse) => {
        if (response.status === 'connected') {
          (window as any).FB.api(
            '/me',
            { fields: 'picture,email' },
            (getMeResponse: any) => {
              onSuccess({
                ...response.authResponse,
                ...getMeResponse,
              });
            }
          );
        } else {
          onFail();
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  return (
    <FormWhiteButton sx={{ gap: '8px' }} onClick={handleClick}>
      <img
        src="/images/common/facebook_logo.png"
        alt="facebook_logo"
        width="24px"
      />
      <Typography fontWeight={500} variant="caption">
        {text}
      </Typography>
    </FormWhiteButton>
  );
};

export default FacebookAuthButton;
