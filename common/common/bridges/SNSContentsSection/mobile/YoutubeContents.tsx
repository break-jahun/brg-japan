import { Box } from '@mui/material';
import SNSFeed from '@/common/bridges/SNSContentsSection/SNSFeed';
import SNSLinkButton from '@/common/bridges/SNSContentsSection/mobile/SNSLinkButton';

function YoutubeContents() {
  const handleClick = () => {
    window.open('https://www.youtube.com/channel/UCUJoSUC3mKt_T8Nj2Vfnxzg');
  };

  return (
    <Box
      width={1}
      display="flex"
      gap="16px"
      flexDirection="column"
      alignItems="center"
      paddingTop="32px"
    >
      <SNSLinkButton
        imgSrc="/images/home/youtube.png"
        channelName="비알지TV"
        snsType="Youtube"
        onClick={handleClick}
      />
      <SNSFeed channelName="비알지TV" />
    </Box>
  );
}

export default YoutubeContents;
