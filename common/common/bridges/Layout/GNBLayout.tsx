import { FloatingMenu } from '@/common/bridges/FloatingMenu';
import { Header } from '@/common/bridges/Header/index';
import { Box, keyframes, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextsmsIcon from '@mui/icons-material/Textsms';
import useShowFloatingMenu from '@/common/bridges/Layout/modules/hooks/useShowFloatingMenu';
import { Footer } from '@/common/bridges/Footer';
import useShowFooter from '@/common/bridges/Layout/modules/hooks/useShowFooter';

interface Props {
  children: JSX.Element;
}

function GNBLayout({ children }: Props) {
  const { pathname } = useRouter();
  const background = useMemo(() => {
    if (pathname === '/') {
      return 'linear-gradient(-135deg, #070a0f, #27282c, #5e8bc2, #6c35bd)';
    }
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/findpassword' ||
      pathname.startsWith('/changePassword')
    ) {
      return 'linear-gradient( 45deg,#263238 0%, #263238 33%,#000000 100%)';
    }
    return 'white';
  }, [pathname]);

  const { floatingMenuData } = useGnbLayoutParser();

  const showFloatingMenu = useShowFloatingMenu();

  const showFooter = useShowFooter();

  return (
    <HomeRoot background={background}>
      <Header />
      <main>{children}</main>
      {showFooter && <Footer />}
      {showFloatingMenu && <FloatingMenu data={floatingMenuData} />}
    </HomeRoot>
  );
}

const BaseRoot = styled(Box)({
  paddingTop: 64,
});

const backgroundPositionAnimation = keyframes`
    0% {
      background-position: 100% 50%;
    },
    50% {
      background-position: 0% 50%;
    },
    100% {
      background-position: 100% 50%;
    }
`;

const HomeRoot = styled(BaseRoot)<{ background: string }>(
  ({ theme, background }) => {
    return {
      animation: `${backgroundPositionAnimation} 20s ${theme.transitions.easing.easeInOut} infinite`,
      background,
      backgroundSize: '400% 400%',
    };
  }
);

function useGnbLayoutParser() {
  const { t } = useTranslation();
  const router = useRouter();

  const floatingMenuData = [
    {
      icon: <ArrowUpwardIcon fontSize="small" />,
      name: t('general/back-to-top'),
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      icon: <TextsmsIcon fontSize="small" />,
      name: t('general/contact-us'),
      onClick: () => {
        window.open('http://pf.kakao.com/_BpWrs');
      },
    },
    {
      icon: <AddBoxIcon fontSize="small" />,
      name: t('general/apply'),
      onClick: () => {
        router.push('/grading/submit');
      },
    },
  ];

  return {
    floatingMenuData,
  };
}

export default GNBLayout;
