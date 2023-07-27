import { getCardInfo } from '@/common/utils/getCardInfo';
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import getManualScoreTitle from '@/common/utils/getManualScoreTitle';
import { CollectionCardItemProp } from '@/specifics/account/bridges/collection/CollectionCardItem/CollectionCardItemDesktop';

const CollectionCardItemMobile = ({
  item,
  handleOpenImageModal,
}: CollectionCardItemProp) => {
  const [isOpen, setIsOpen] = useState(false);

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
        padding: '8px',
        boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, 0.1) !important',
      }}
    >
      <Grid container direction="column">
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box display="flex">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                  backgroundColor: '#fafafa',
                  cursor: 'pointer',

                  width: 80,
                  height: 80,
                }}
                onClick={() => {
                  if (item.imageFiles) {
                    handleOpenImageModal(imgFile);
                  }
                }}
              >
                <img height={60} src={imgFile} alt="collection card" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
              >
                <Box display="flex">
                  <Typography variant="caption" align="right">
                    <b>{getCardInfo(item)}</b>
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="#4E5996"
                    marginRight="10px"
                  >
                    {item.playerName}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton
              onClick={openCertificationWithNewTap}
              sx={{ padding: '5px' }}
            >
              <OpenInNewRounded fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <KeyboardArrowUpRounded />
              ) : (
                <KeyboardArrowDownRounded />
              )}
            </IconButton>
          </Box>
          <Collapse
            in={isOpen}
            timeout="auto"
            unmountOnExit
            sx={{
              backgroundColor: '#fafafa',
            }}
          >
            <Box m={1}>
              <Grid container>
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography fontSize="9px" gutterBottom>
                      GRADE
                    </Typography>
                    <Typography variant="caption">
                      <b>
                        {item.manualScore
                          ? getManualScoreTitle(item.manualScore)
                          : ''}
                      </b>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography fontSize="9px" gutterBottom>
                      A.GRADE
                    </Typography>
                    <Typography variant="caption">
                      <b>{item.autoScore ? item.autoScore : '-'}</b>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography fontSize="9px" gutterBottom>
                      No#
                    </Typography>
                    <Typography variant="caption">
                      <b>{item.cardNumber}</b>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography fontSize="9px" gutterBottom>
                      SERIAL
                    </Typography>
                    <Typography variant="caption">
                      <b>{item.serial ? item.serial : '-'}</b>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CollectionCardItemMobile;
