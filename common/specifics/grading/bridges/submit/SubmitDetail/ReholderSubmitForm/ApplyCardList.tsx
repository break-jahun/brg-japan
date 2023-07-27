import { ReholderCardList } from '@/common/modules/recoil/reholder';
import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ApplyCardListProps {
  data: ReholderCardList | undefined;
  onDelete: (id: number) => void;
}

function ApplyCardList({ data, onDelete }: ApplyCardListProps) {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="body1" fontWeight={600}>
        {t('신청카드목록')}
      </Typography>
      <HeaderBox>
        <HeaderItem>{t('card-list-form/serial-number2')}</HeaderItem>
        <HeaderItem>{t('general/card-info')}</HeaderItem>
        <HeaderItem>{t('card-list-form/delete')}</HeaderItem>
      </HeaderBox>
      <ContentBox>
        {data &&
          data.map((item) => (
            <React.Fragment key={item.serial}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="body2" fontWeight={800}>
                  {item.serial}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography variant="body2">{item.cardInfo}</Typography>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  onClick={() => onDelete(item.id)}
                  sx={{
                    color: '#6034b0',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {t('card-list-form/delete')}
                </Button>
              </Box>
            </React.Fragment>
          ))}
      </ContentBox>
    </Box>
  );
}

const BaseGridBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1.5fr 4fr 1fr',
  gap: '1rem',
  wordBreak: 'break-all',
});

const ContentBox = styled(BaseGridBox)({
  gridAutoRows: 'minmax(50px, auto)',
});

const HeaderBox = styled(BaseGridBox)({
  gridAutoRows: 'minmax(35px, auto)',
  color: '#9e9e9e',
  borderBottom: '1px solid #bdbdbd',
  marginTop: '16px',
});

const HeaderItem = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default ApplyCardList;
