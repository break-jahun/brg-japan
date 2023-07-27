import { MenuListProps } from '@/common/components/Layout/NavigationHeader';
import { Box } from '@mui/material';
import { useEffect, ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  hasTransitionedIn: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const BaseMobileDrawer = ({
  isOpen,
  hasTransitionedIn,
  handleClose,
  children,
}: Props & MenuListProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          zIndex: -20,
          width: '100%',
          backgroundColor: 'gray_100',
          padding: isOpen ? '32px 20px' : '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'absolute',
          top: isOpen && hasTransitionedIn ? '64px' : '-184px',
          left: 0,
          transition: 'all ease 0.3s',
        }}
      >
        {children}
      </Box>
      <Box
        onClick={handleClose}
        sx={{
          zIndex: -30,
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          height: '100vh',
          background: 'black',
          opacity: isOpen && hasTransitionedIn ? 0.36 : 0,
          transition: 'opacity ease 0.3s',
        }}
      />
    </>
  );
};

export default BaseMobileDrawer;
