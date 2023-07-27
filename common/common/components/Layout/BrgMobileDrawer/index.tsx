import { MenuListProps } from '@/common/components/Layout/NavigationHeader';
import { Box } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import AccountButtonGroup from './AccountButtonGroup';

interface Props {
  isOpen: boolean;
  hasTransitionedIn: boolean;
  children: ReactNode;
  handleClose: () => void;
}

const BrgMobileDrawer = ({
  isOpen,
  hasTransitionedIn,
  children,
  handleClose,
}: Props & MenuListProps) => {
  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        '--height',
        `${window.innerHeight}px`
      );
    };

    if (isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.overflow = 'hidden';

      const doc = document.documentElement;

      doc.style.setProperty('--height', `${window.innerHeight}px`);

      window.addEventListener('resize', setHeight);
    }

    if (!isOpen) {
      document.body.style.position = 'unset';
      document.body.style.overflow = 'unset';

      window.removeEventListener('resize', setHeight);
    }
  }, [isOpen]);

  return (
    <Box
      sx={{
        zIndex: -20,
        width: '100%',
        backgroundColor: 'gray_100',
        padding: isOpen ? '32px 20px' : '0 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        top: isOpen && hasTransitionedIn ? '64px' : '-100vh',
        left: 0,
        transition: 'all ease 0.3s',
        // height: 'calc(100vh - 64px)',
        height: 'calc(var(--height)  - 64px)',
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '24px',
        }}
      >
        {children}
      </Box>
      <AccountButtonGroup handleClose={handleClose} />
    </Box>
  );
};

export default BrgMobileDrawer;
