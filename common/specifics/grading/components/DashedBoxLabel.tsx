import { Box, Typography, SxProps } from '@mui/material';

interface DashedBoxLabelProps {
  label: string;
  color: string;
  sx?: SxProps;
}

function DashedBoxLabel({
  label,
  color,
  sx,
}: DashedBoxLabelProps & { sx?: SxProps }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      width={1}
      sx={{
        ...sx,
      }}
    >
      <Box
        width="20px"
        height="20px"
        marginRight="8px"
        sx={{ border: '1px dashed', borderColor: color }}
      />
      <Typography variant="caption" color={color} fontWeight={600}>
        {label}
      </Typography>
    </Box>
  );
}

export default DashedBoxLabel;
