import { Box } from '@mui/material';
import SNSFeed from '@/common/bridges/SNSContentsSection/SNSFeed';

export type ChannelNames = '비알지TV' | 'brg' | 'brgcard_Japan';
export type SNSTypes = 'Youtube' | 'Instagram' | 'Twitter';

interface Props {
  channelName: ChannelNames;
  children: JSX.Element[];
}

const DesktopSNSListContainer = ({ channelName, children }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width={1}
      marginTop="24px"
    >
      <SNSFeed channelName={channelName} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        rowGap="16px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DesktopSNSListContainer;
