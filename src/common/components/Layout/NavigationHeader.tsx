import {
  Container,
  DimensionBox,
  MainContainer,
  NavigationLogoImage,
} from '@/common/components/Layout/NavigationHeader';
import PCMenuList from '@/common/components/Layout/PCMenuList';
import useNavigationHeader from '@/common/modules/hooks/useNavigationHeader';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export const MENUS = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Grading', href: '/grading' },
  { name: 'Partner Shop', href: '/partner-shop' },
];

const NavigationHeader = () => {
  const { isOpen, isMobile, isLogoColored, handleClose, handleToggle } =
    useNavigationHeader();

  return (
    <MainContainer>
      <DimensionBox isOpen={isOpen} />
      <Container>
        <Link href="/" passHref>
          <NavigationLogoImage
            src={
              isLogoColored
                ? '/images/common/brg_logo_color.png'
                : '/images/common/brg_logo.png'
            }
            onClick={handleClose}
          />
        </Link>
        {isMobile ? (
          <MobileMenu
            isOpen={isOpen}
            handleClick={handleToggle}
            handleClose={handleClose}
          />
        ) : (
          <PCMenuList menus={MENUS} />
        )}
      </Container>
    </MainContainer>
  );
};

export default NavigationHeader;
