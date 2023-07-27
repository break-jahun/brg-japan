import { Box, styled, SxProps, Typography } from '@mui/material';
import { SNSIconButtonProps } from '@/specifics/home/bridges/SNSSection/SNSButtonGroup/MobileSNSIconButton';

const DesktopSNSIconButton = ({
  src,
  text,
  link,
  sx,
}: SNSIconButtonProps & { sx?: SxProps }) => {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: '120px',
        ...sx,
      }}
    >
      <StyledImg src={src} />
      <Box sx={{ marginTop: '16px' }}>
        <Typography color="white" variant="subtitle1" fontWeight={700}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default DesktopSNSIconButton;

const StyledImg = styled('img')({
  width: '64px',
  height: '64px',
  cursor: 'pointer',
});
