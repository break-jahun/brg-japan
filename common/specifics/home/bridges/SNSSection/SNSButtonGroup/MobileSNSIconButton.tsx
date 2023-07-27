import { Box, styled, Typography } from '@mui/material';

export interface SNSIconButtonProps {
  src: string;
  text: string;
  link: string;
}

const MobileSNSIconButton = ({ src, text, link }: SNSIconButtonProps) => {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <Box
      onClick={handleClick}
      sx={(theme) => ({
        width: '320px',
        paddingY: '8px',
        color: 'grey.100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8.5px',
        borderRadius: '28px',
        backgroundColor: 'transparent',
        border: '1px solid white',
      })}
    >
      <StyledImg src={src} />
      <Typography variant="button">{text}</Typography>
    </Box>
  );
};

export default MobileSNSIconButton;

const StyledImg = styled('img')({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
});
