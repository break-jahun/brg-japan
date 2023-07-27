import { Locale } from '@/common/types/common';
import {
  Box,
  Skeleton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FeedContentProps {
  title: string;
  titleColor: string;
  subTitle?: string;
  src: string;
  isScrollable: boolean;
}

function FeedContent({
  title,
  titleColor,
  subTitle,
  src,
  isScrollable,
}: FeedContentProps) {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box>
      <Box display="flex" marginBottom="18px">
        <Typography
          variant={isMobile ? 'body2' : 'h6'}
          fontWeight="700"
          color={titleColor}
        >
          {title}
        </Typography>
        {subTitle && i18n.language === Locale.KR && (
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            fontWeight="700"
            marginLeft="4px"
          >
            {subTitle}
          </Typography>
        )}
      </Box>
      <IframeContainter isScrollable={isScrollable}>
        {isLoading && <IframeSkeleton variant="rectangular" animation="wave" />}
        <iframe
          title={title}
          src={src}
          className="snapwidget-widget"
          frameBorder={0}
          scrolling="no"
          style={{
            border: 'none',
            overflow: 'hidden',
            width: '100%',
            height: isMobile ? '2010px' : '2770px',
            opacity: isLoading ? 0 : 1,
          }}
          loading="lazy"
        />
      </IframeContainter>
    </Box>
  );
}

const IframeContainter = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isScrollable',
})<{ isScrollable: boolean }>(({ isScrollable, theme }) => ({
  position: 'relative',
  overflow: isScrollable ? 'scroll' : 'hidden',
  width: '350px',
  height: '350px',

  [theme.breakpoints.up('sm')]: {
    width: '484px',
    height: '484px',
  },
}));

const IframeSkeleton = styled(Skeleton)(() => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '99%',
  opacity: 1,
}));

export default FeedContent;
