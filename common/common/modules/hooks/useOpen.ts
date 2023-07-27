import { useState } from 'react';

function useOpen() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleToggle,
    handleOpen,
    handleClose,
  };
}

export default useOpen;
