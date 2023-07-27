import { Box } from '@mui/material';

interface SliderBarButtonProps {
  isSelected: boolean;
  handleOnClick: () => void;
}

function SliderBarButton({ isSelected, handleOnClick }: SliderBarButtonProps) {
  return (
    <Box
      onClick={handleOnClick}
      width={1}
      height={{ xs: '4px', sm: '8px' }}
      bgcolor={isSelected ? 'secondary_80' : 'transparent'}
      borderRadius="4px"
      sx={{
        cursor: 'pointer',
      }}
    />
  );
}

export default SliderBarButton;
