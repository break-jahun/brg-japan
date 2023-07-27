import useOpen from '@/common/modules/hooks/useOpen';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const useNavigationHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { open: isOpen, handleToggle, handleClose } = useOpen();

  const [isLogoColored, setIsLogoColored] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsLogoColored(isOpen);
      }, 300);
    } else {
      setIsLogoColored(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isMobile) {
      handleClose();
    }
  }, [handleClose, isMobile]);

  return {
    isOpen,
    isMobile,
    isLogoColored,
    handleClose,
    handleToggle,
  };
};

export default useNavigationHeader;
