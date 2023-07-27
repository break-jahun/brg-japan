import { HStack } from '@/common/components/HStack';
import { Button } from '@mui/base';
import { Box, Typography, styled } from '@mui/material';
import BrgLogo from 'brg-japan/components/Layout/BrgLogo';
import useIsDesktop from 'brg-japan/modules/hooks/useIsDesktop';
import useMenuData from 'brg-japan/modules/hooks/useMenuData';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

function NavigationBar() {
  const isDesktop = useIsDesktop();

  const menuData = useMenuData();

  return (
    <HStack
      width="100%"
      position="fixed"
      zIndex={100}
      top={0}
      left={0}
      height="64px"
      bgcolor="rgba(0, 0, 0, 0.50)"
      boxShadow="0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"
      padding={{ xs: '18px 16px', sm: '18px 32px' }}
      justifyContent="space-between"
    >
      <Box>
        <Link href="/" passHref>
          <BrgLogo />
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
        <HamburgerButton>
          <MenuIcon color="inherit" />
        </HamburgerButton>
      )}
    </HStack>
  );
}

const MenuText = styled(Typography)({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

const HamburgerButton = styled(Button)({
  color: '#E0E0E0',
});

export default NavigationBar;
