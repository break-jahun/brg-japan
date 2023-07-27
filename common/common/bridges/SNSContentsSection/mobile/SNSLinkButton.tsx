import { Box, styled, Typography } from '@mui/material';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import {
  ChannelNames,
  SNSTypes,
} from '@/common/bridges/SNSContentsSection/DesktopSNSList';

interface SNSLinkButtonProps {
  imgSrc: string;
  snsType: SNSTypes;
  channelName: ChannelNames;
  onClick: () => void;
}

function SNSLinkButton({
  imgSrc,
  snsType,
  channelName,
  onClick,
}: SNSLinkButtonProps) {
  return (
    <Button onClick={onClick}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="subtitle1" fontWeight={700}>
          {channelName}
        </Typography>
        <Box display="flex" alignItems="center">
          <img src={imgSrc} alt="brgTV" width="24px" />
          <Typography variant="caption">{snsType}</Typography>
        </Box>
      </Box>
      <KeyboardArrowRightRounded sx={{ opacity: 0.36 }} />
    </Button>
  );
}

export default SNSLinkButton;

const Button = styled('button')({
  paddingLeft: '4px',
  width: '100%',
  maxWidth: '328px',
  display: 'flex',
  justifyContent: 'space-between',
  height: '64px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
});
