import { styled } from '@mui/material';
import { ChannelNames } from '@/common/bridges/SNSContentsSection/DesktopSNSList';
import SNSFeedLayout from '@/common/bridges/SNSContentsSection/SNSFeedLayout';

interface SNSFeedProps {
  channelName: ChannelNames;
}

function SNSFeed({ channelName }: SNSFeedProps) {
  if (channelName === 'brg') {
    return (
      <SNSFeedLayout>
        <Feed
          src="https://snapwidget.com/embed/1016250"
          sx={{
            width: { xs: '328px', sm: '440px' },
            height: { xs: '328px', sm: '338px' },
          }}
        />
      </SNSFeedLayout>
    );
  }
  if (channelName === 'brgcard_Japan') {
    return (
      <SNSFeedLayout>
        <Feed
          src="https://snapwidget.com/embed/1016077"
          sx={{
            width: { xs: '328px', sm: '440px' },
            height: { xs: '328px', sm: '338px' },
          }}
        />
      </SNSFeedLayout>
    );
  }
  // 기본 렌더링 유튜브 비알지TV
  return (
    <SNSFeedLayout>
      <Feed
        src="https://snapwidget.com/embed/1016064"
        sx={{
          width: { xs: '328px', sm: '440px' },
          height: { xs: '328px', sm: '338px' },
          paddingTop: { xs: '66px', sm: '44px' },
        }}
      />
    </SNSFeedLayout>
  );
}

export default SNSFeed;

const Feed = styled('iframe')({
  border: 'none',
});
