import { HStack } from '@/common/components/HStack';
import { Button } from '@mui/base';
import { Box, IconButton, Typography, styled } from '@mui/material';
import BrgLogo from 'brg-japan/components/Layout/BrgLogo';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import useMenuData from 'brg-japan/modules/hooks/useMenuData';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useCallback, useEffect, useState } from 'react';
import MobileNavigationMenu from 'brg-japan/components/Layout/MobileNavigationMenu';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';

function NavigationBar() {
  const isDesktop = useIsDesktop();

  const menuData = useMenuData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoOn, setLogoOn] = useState(false);

  const router = useRouter();

  const handleToggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
    if (mobileMenuOpen) {
      setTimeout(() => {
        setLogoOn((prev) => !prev);
      }, 500);
    } else {
      setLogoOn((prev) => !prev);
    }
  }, [mobileMenuOpen]);

  const handleCloseMenu = useCallback(() => {
    if (mobileMenuOpen) {
      handleToggleMobileMenu();
    }
  }, [handleToggleMobileMenu, mobileMenuOpen]);

  useEffect(() => {
    router.events.on('routeChangeStart', handleCloseMenu);

    return () => {
      router.events.off('routeChangeStart', handleCloseMenu);
    };
  }, [handleCloseMenu, router.events]);

  useEffect(() => {
    const { body } = document;
    if (mobileMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <NavigationBarContainer
        width="100%"
        position="fixed"
        zIndex={101}
        top={0}
        left={0}
        height="64px"
        bgcolor={mobileMenuOpen ? 'white' : 'rgba(0, 0, 0, 0.50)'}
        boxShadow="0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"
        padding={{ xs: '18px 16px', sm: '18px 32px' }}
        justifyContent="space-between"
        sx={{
          ...(!mobileMenuOpen && {
            transitionDelay: '500ms',
            transitionProperty: 'background-color',
          }),
        }}
      >
        <Box>
          <Link href="/" passHref>
            <BrgLogo color={logoOn ? 'black' : 'white'} />
          </Link>
        </Box>
        {isDesktop && (
          <HStack gap="81px" color="#E0E0E0">
            {menuData.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <MenuText>{item.name}</MenuText>
              </Link>
            ))}
          </HStack>
        )}
        {!isDesktop && (
          <HamburgerButton onClick={handleToggleMobileMenu}>
            <MenuIcon
              sx={{
                color: mobileMenuOpen ? 'black' : 'inherit',
                ...(!mobileMenuOpen && {
                  transitionDelay: '500ms',
                  transitionProperty: 'color',
                }),
              }}
            />
          </HamburgerButton>
        )}
      </NavigationBarContainer>
      {!isDesktop && <MobileNavigationMenu open={mobileMenuOpen} />}
      {mobileMenuOpen && (
        <Box
          onClick={handleCloseMenu}
          zIndex={2}
          position="absolute"
          width="100%"
          top={0}
          left={0}
          height="100vh"
          bgcolor="black"
          sx={{ opacity: 0.36 }}
        />
      )}
    </>
  );
}

const NavigationBarContainer = styled(motion(HStack))({});

const MenuText = styled(Typography)({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

const HamburgerButton = styled(IconButton)({
  color: '#E0E0E0',
});

export default NavigationBar;
