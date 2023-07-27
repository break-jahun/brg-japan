import { Box, Typography } from '@mui/material';
import {
  ChannelNames,
  SNSTypes,
} from '@/common/bridges/SNSContentsSection/DesktopSNSList';

interface ContentsSwitchingButtonProps {
  channelName: ChannelNames;
  snsType: SNSTypes;
  isSelected: boolean;
  src: string;
  onClick: () => void;
}

function ContentsSwitchingButton({
  channelName,
  isSelected,
  snsType,
  src,
  onClick,
}: ContentsSwitchingButtonProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="15px 80px"
      columnGap={{ xs: '8px', sm: '16px' }}
      width="240px"
      height="82px"
      sx={{
        cursor: 'pointer',
      }}
      borderRadius="82px"
      bgcolor={isSelected ? 'white' : 'rgba(0,0,0,0.04)'}
      onClick={onClick}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height={1}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ opacity: isSelected ? 1 : 0.36 }}
          align="center"
        >
          {channelName}
        </Typography>

        <Box display="flex" alignItems="center">
          <img src={src} alt={`${snsType}_logo`} width={24} />
          <Typography
            variant="caption"
            sx={{ opacity: isSelected ? 1 : 0.36 }}
            align="center"
          >
            {snsType}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentsSwitchingButton;
