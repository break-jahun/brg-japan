import { VStack } from '@/common/components/VStack';
import { Box, Typography, styled } from '@mui/material';
import useMenuData from 'brg-japan/modules/hooks/useMenuData';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  open: boolean;
};

function MobileNavigationMenu(props: Props) {
  const { open } = props;

  const menu = useMenuData();

  const router = useRouter();

  return (
    <AnimatePresence>
      {open && (
        <MenuBox
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0, transition: { delay: 0.3, duration: 0.3 } }}
        >
          <MenuContentBox
            padding="96px 20px 36px 20px"
            gap="24px"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: {
                transition: {
                  staggerChildren: 0.1,
                  staggerDirection: -1,
                },
              },
              open: {
                transition: {
                  staggerChildren: 0.1,
                  staggerDirection: 1,
                },
              },
            }}
          >
            {menu.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <MenuContentText
                  variant="h6"
                  fontWeight={item.href === router.asPath ? 700 : 500}
                  color="rgb(0, 50, 91)"
                  variants={{
                    closed: {
                      opacity: 0,
                    },
                    open: { opacity: 1 },
                  }}
                >
                  {item.name}
                </MenuContentText>
              </Link>
            ))}
          </MenuContentBox>
        </MenuBox>
      )}
    </AnimatePresence>
  );
}

const MenuBox = styled(motion(Box))({
  position: 'fixed',
  width: '100%',
  top: 0,
  background: 'rgb(245, 245, 245)',
  zIndex: 100,
});

const MenuContentBox = styled(motion(VStack))({});

const MenuContentText = styled(motion(Typography))({});

export default MobileNavigationMenu;
