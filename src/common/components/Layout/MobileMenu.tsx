import { IconButton, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BaseMobileDrawer from '@/common/components/Layout/BaseMobileDrawer';
import useMobileMenu from '@/common/modules/hooks/useMobileMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MENUS } from './NavigationHeader';

interface Props {
  isOpen: boolean;
  handleClick: () => void;
  handleClose: () => void;
}

const MobileMenu = ({ isOpen, handleClick, handleClose }: Props) => {
  const { hasTransitionedIn } = useMobileMenu(isOpen);
  const router = useRouter();

  return (
    <>
      <IconButton
        sx={{
          color: isOpen ? 'black' : 'white',
          width: '24px',
          height: '24px',
        }}
        onClick={handleClick}
      >
        <MenuRoundedIcon />
      </IconButton>
      {(isOpen || hasTransitionedIn) && (
        <BaseMobileDrawer
          isOpen={isOpen}
          hasTransitionedIn={hasTransitionedIn}
          handleClose={handleClose}
          menus={MENUS}
        >
          {MENUS.map((menu) => (
            <Link href={menu.href} passHref key={menu.name}>
              <Typography
                onClick={handleClose}
                color="secondary_20"
                variant="h6"
                fontWeight={router.asPath === menu.href ? 700 : 500}
              >
                {menu.name}
              </Typography>
            </Link>
          ))}
        </BaseMobileDrawer>
      )}
    </>
  );
};

export default MobileMenu;
