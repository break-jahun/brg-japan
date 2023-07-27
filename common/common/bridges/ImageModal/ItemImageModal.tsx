import { Box, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  src: string;
}

const ItemImageModal = ({ isOpen, handleClose, src }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        backgroundColor: 'rgba(0,0,0,0.8)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          outline: 0,
        }}
      >
        <Box
          sx={{
            paddingY: '8px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="caption">
            {isMobile
              ? t('account-grading-collection/two-hand-zoom')
              : t('account-grading-collection/mouse-wheel-zoom')}
          </Typography>

          <Typography variant="caption">
            {t('account-grading-collection/click-outside-close-window')}
          </Typography>
        </Box>
        <TransformWrapper>
          <TransformComponent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={1}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: '80%', sm: 'auto' },
                  height: { xs: 'auto', sm: '80vh' },
                }}
                alt="card"
                src={src}
              />
            </Box>
          </TransformComponent>
        </TransformWrapper>
      </Box>
    </Modal>
  );
};

export default ItemImageModal;
