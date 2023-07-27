import { useTranslation } from 'react-i18next';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import useGetRouterQuery from '@/common/modules/hooks/useGetRouterQuery';
import CertificationDesktopImage from '@/specifics/certification/bridges/CertificationResult/CertificationDesktopImage';
import CertificationCardInformation from '@/specifics/certification/bridges/CertificationResult/CertificationCardInformation';
import NoSearchResult from '@/specifics/certification/bridges/CertificationResult/NoSearchResult';
import CertificationMobileImage from '@/specifics/certification/bridges/CertificationResult/CertificationMobileImage';
import { FileUsedAt } from '@/common/types/fileInfo';
import { PickInStringLiteralType } from '@/common/types/PickInStringLiteralType';
import useItemsBySerialQuery from '@/specifics/certification/modules/apiHooks/useItemsBySerialQuery';
import { SecondaryButton } from '@/common/components/Button';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';

const CertificationResult = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const serial = useGetRouterQuery('serial');
  const { data, isFetched } = useItemsBySerialQuery(serial);

  const getLastImage = (
    direction: PickInStringLiteralType<FileUsedAt, 'FRONT_PHOTO' | 'BACK_PHOTO'>
  ) => {
    if (!data) return '';

    const imageUrls =
      data.imageFiles
        ?.filter((image) => image.usedAt === direction)
        .map((image) => image.url) || [];

    const [lastImageUrl] = imageUrls.slice(-1);

    return lastImageUrl;
  };

  const frontImage = getLastImage('FRONT_PHOTO');
  const backImage = getLastImage('BACK_PHOTO');

  return (
    <Box
      sx={{
        padding: {
          xs: '80px 16px',
          sm: '88px 32px 160px',
        },
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          marginBottom: '24px',
        }}
      >
        <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight={500}>
          {t('certification-7')}
        </Typography>
      </Box>
      <Box
        minWidth="328px"
        height="92px"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
        borderTop="16px solid"
        borderColor="secondary_20"
        bgcolor="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" color="secondary_20" fontWeight={600}>
          {serial}
        </Typography>
      </Box>

      {isFetched && data && (
        <>
          <Box>
            {isMobile ? (
              <CertificationMobileImage
                frontImage={frontImage}
                backImage={backImage}
              />
            ) : (
              <CertificationDesktopImage
                frontImage={frontImage}
                backImage={backImage}
              />
            )}
          </Box>
          <CertificationCardInformation />
          <Link
            href={{
              pathname: '/pop-report/result',
              query: {
                cardId: data.cardId,
                setName: encodeURIComponent(data.setName),
              },
            }}
            passHref
          >
            <SecondaryButton
              sx={{
                marginTop: '40px',
                display: 'flex',
                gap: '4px',
              }}
            >
              <Typography variant="button" fontWeight={500}>
                POP REPORT
              </Typography>
              <ArrowForwardIosRounded />
            </SecondaryButton>
          </Link>
        </>
      )}
      {isFetched && !data && <NoSearchResult />}
    </Box>
  );
};

export default CertificationResult;
