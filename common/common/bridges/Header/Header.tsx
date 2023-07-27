import {
  AppBar,
  Box,
  IconButton,
  styled,
  Theme,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import useOpen from '@/common/modules/hooks/useOpen';
import MobileMenu from '@/common/bridges/Header/MobileMenu';
import PCMenu from '@/common/bridges/Header/PCMenu';
import useHeaderLight from '@/common/bridges/Header/modules/hooks/useHeaderLight';
import SubmenuBreadcrumb from '@/common/bridges/Header/PCMenu/Submenu/SubmenuBreadcrumb';
import useShowSubmenu from '@/common/bridges/Header/modules/hooks/useShowSubmenu';

interface HeaderProps {}

function Header() {
  const { open: isOpen, handleClose, handleOpen } = useOpen();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isHeaderLight = useHeaderLight();

  const showSubmenu = useShowSubmenu();

  return (
    <AppBar
      position="fixed"
      color={isHeaderLight ? 'inherit' : 'transparent'}
      sx={{ boxShadow: '5px 0px 15px -5px rgb(0 0 0 / 10%)' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          padding: '0 24px',
          height: '64px',
        }}
      >
        <Link href="/home" passHref>
          <Image
            src={
              isHeaderLight
                ? '/images/break_logo_b.png'
                : '/images/break_logo_w.png'
            }
            alt="logo"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        {!isMobile && (
          <Box marginLeft="auto">
            <PCMenu />
          </Box>
        )}
        {isMobile && (
          <IconButton
            sx={{ padding: 0, marginLeft: 'auto' }}
            onClick={handleOpen}
          >
            <MenuIcon
              fontSize="medium"
              sx={{
                color: isHeaderLight ? 'black' : 'white',
              }}
            />
          </IconButton>
        )}
      </Toolbar>
      {showSubmenu && <SubmenuBreadcrumb />}
      <Drawer open={isOpen} anchor="right" onClose={handleClose}>
        <MobileMenu />
      </Drawer>
    </AppBar>
  );
}

const Image = styled('img')({
  width: '80px',
  height: '45px',
});

export default Header;
