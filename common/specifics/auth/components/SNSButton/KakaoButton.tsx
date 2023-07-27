import { Box } from '@mui/material';
import KakaoLogin from 'react-kakao-login';
import { KakaoLoginResponseType } from '@/common/types/user/auth';

interface KakaoButtonProps {
  handleSuccessKakao: (response: KakaoLoginResponseType) => void;
  handleFailKakao: () => void;
}

function KakaoButton({
  handleSuccessKakao,
  handleFailKakao,
}: KakaoButtonProps) {
  return (
    <Box
      margin="8px"
      width="36px"
      height="36px"
      sx={{
        button: {
          border: 'none!important;',
          boxShadow: 'unset!important;',
          backgroundColor: 'transparent!important;',
          height: '36px!important;',
          width: '36px!important;',
          outline: '0!important;',
          padding: '0!important;',
          cursor: 'pointer',
        },
      }}
    >
      <KakaoLogin
        token={process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string}
        onSuccess={(response: KakaoLoginResponseType) =>
          handleSuccessKakao(response)
        }
        onFail={handleFailKakao}
        onLogout={console.info}
        needProfile
      >
        <img
          src="/images/kakaolink_btn_small.png"
          alt="kakaoLogin"
          width="36px"
          height="36px"
        />
      </KakaoLogin>
    </Box>
  );
}

export default KakaoButton;
