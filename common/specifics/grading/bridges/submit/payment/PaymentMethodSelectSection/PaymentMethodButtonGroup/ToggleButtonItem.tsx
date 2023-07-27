import { ToggleButton, Typography } from '@mui/material';

interface Props {
  active: boolean;
  text: string;
  onClick: () => void;
}

const ToggleButtonItem = ({ active, text, onClick }: Props) => {
  const backgroundColor = active ? 'black' : 'transparent';
  const color = active ? 'white' : 'black';

  return (
    <ToggleButton
      value={text}
      disableRipple
      sx={{
        flexBasis: ['50%', '25%'],
        py: 2,
        backgroundColor,
        color,
        borderRadius: 0,
        '&:hover': {
          backgroundColor,
          color,
        },
      }}
      onClick={onClick}
    >
      <Typography>{text}</Typography>
    </ToggleButton>
  );
};

export default ToggleButtonItem;
