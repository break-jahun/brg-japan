/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';

interface BrgPointLabelCardProps {
  title: string;
  labelNumber: number;
  labelSerial: string;
}

function BrgPointLabelCard({
  title,
  labelNumber,
  labelSerial,
}: BrgPointLabelCardProps) {
  return (
    <Box
      width={{ xs: '100%', sm: '360px' }}
      bgcolor="white"
      height="116px"
      component="article"
      borderTop="16px solid"
      borderColor="secondary_20"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
      padding="8px 16px"
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h6"
          fontWeight={700}
          width="280px"
          whiteSpace="pre-line"
        >
          {title}
        </Typography>
        <Typography variant="h3" fontWeight={600} marginTop="-8px">
          {labelNumber}
        </Typography>
      </Box>
      <Box
        display="flex"
        height="20px"
        justifyContent="space-between"
        sx={{ opacity: 0.36 }}
      >
        <img
          src="/images/common/brg_logo_color.png"
          alt="logo"
          width={36.5}
          height={16}
        />
        <Typography variant="caption" color="black" fontWeight={600}>
          {labelSerial}
        </Typography>
      </Box>
    </Box>
  );
}

export default BrgPointLabelCard;
