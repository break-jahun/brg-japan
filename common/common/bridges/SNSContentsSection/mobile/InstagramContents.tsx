import { Box } from '@mui/material';
import SNSLinkButton from '@/common/bridges/SNSContentsSection/mobile/SNSLinkButton';
import SNSFeed from '@/common/bridges/SNSContentsSection/SNSFeed';

function InstagramContents() {
  const handleClick = () => {
    window.open('https://www.instagram.com/brgcard/');
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
        imgSrc="/images/home/instagram.png"
        channelName="brg"
        snsType="Instagram"
        onClick={handleClick}
      />
      <SNSFeed channelName="brg" />
    </Box>
  );
}

export default InstagramContents;
