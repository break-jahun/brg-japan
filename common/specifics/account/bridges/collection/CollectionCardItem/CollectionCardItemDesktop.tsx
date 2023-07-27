import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { getCardInfo } from '@/common/utils/getCardInfo';
import getManualScoreTitle from '@/common/utils/getManualScoreTitle';
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useMemo } from 'react';

export interface CollectionCardItemProp {
  item: GradingOrderItemAttributes;
  handleOpenImageModal: (file: string) => void;
}

const CollectionCardItemDesktop = ({
  item,
  handleOpenImageModal,
}: CollectionCardItemProp) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imgFile = useMemo(() => {
    const imageFiles = item.imageFiles?.filter(
      (file) => file.usedAt === 'FRONT_PHOTO'
    );
    if (imageFiles) {
      return imageFiles[imageFiles.length - 1]?.url;
    }
    return '';
  }, [item.imageFiles]);

  const openCertificationWithNewTap = () => {
    window.open(`/certification/${item.serial}`, '_blank');
  };

  return (
    <Paper
      sx={{
        margin: '8px',
        padding: '16px',
        boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, 0.1) !important',
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={4}>
          <Box display="flex">
            <Box
              sx={{
                width: { xs: '80px', sm: '100px' },
                height: { xs: '80px', sm: '100px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px',
                backgroundColor: '#fafafa',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (item.imageFiles) {
                  handleOpenImageModal(imgFile);
                }
              }}
            >
              <img height={80} src={imgFile} alt="collection card" />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Box display="flex">
                <Typography gutterBottom variant="body2" align="right">
                  <b>{getCardInfo(item)}</b>
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="space-between"
                width={1}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#4E5996"
                  marginRight="10px"
                >
                  {item.playerName}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" gutterBottom>
              GRADE
            </Typography>
            <Typography variant="h5">
              <b>
                {item.manualScore ? getManualScoreTitle(item.manualScore) : ''}
              </b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" gutterBottom>
              AUTOGRADE
            </Typography>
            <Typography variant="h5">
              <b>{item.autoScore ? item.autoScore : '-'}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" gutterBottom>
              No#
            </Typography>
            <Typography variant="h6">
              <b>{item.cardNumber}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="caption" gutterBottom>
                SERIAL
              </Typography>
              <Typography variant="h6">
                <b>{item.serial ? item.serial : '-'}</b>
              </Typography>
            </Box>
            <IconButton onClick={openCertificationWithNewTap}>
              <OpenInNewRounded />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CollectionCardItemDesktop;
