import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Box, IconButton, Modal, styled } from '@mui/material';
import Close from '@mui/icons-material/Close';

interface TransformImageModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
  selectedCardImage: string;
}

function TransformImageModal({
  isOpen,
  handleModalClose,
  selectedCardImage,
}: TransformImageModalProps) {
  return (
    <Modal
      open={isOpen}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'auto',
          outline: 0,
        }}
      >
        <IconButton
          sx={{ position: 'absolute', right: 8, top: 8 }}
          onClick={handleModalClose}
        >
          <Close
            sx={(theme) => ({
              color: 'white',
              fontSize: '24px',
              [theme.breakpoints.up('sm')]: {
                fontSize: '64px',
              },
            })}
          />
        </IconButton>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={1}
        >
          <LogoImage alt="logo" src="/images/brg_logo_w.png" />
        </Box>
        <TransformWrapper initialScale={1}>
          <TransformComponent>
            {/* 앞면인지 뒷면인지 클릭에 해당하는 면 사진 보여주면 됩니다 */}
            <ZoomImage alt="card" src={selectedCardImage} />
          </TransformComponent>
        </TransformWrapper>
      </Box>
    </Modal>
  );
}

export default TransformImageModal;

const LogoImage = styled('img')({
  width: '80px',
});

const ZoomImage = styled('img')({
  height: '80vh',
  padding: '20px',
});
