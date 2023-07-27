import { Box } from '@mui/material';
import SNSFeed from '@/common/bridges/SNSContentsSection/SNSFeed';
import SNSLinkButton from '@/common/bridges/SNSContentsSection/mobile/SNSLinkButton';

function TwitterContents() {
  const handleClick = () => {
    window.open('https://twitter.com/brgcard_jp');
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
        imgSrc="/images/home/twitter.png"
        channelName="brgcard_Japan"
        snsType="Twitter"
        onClick={handleClick}
      />
      <SNSFeed channelName="brgcard_Japan" />
    </Box>
  );
}

export default TwitterContents;
