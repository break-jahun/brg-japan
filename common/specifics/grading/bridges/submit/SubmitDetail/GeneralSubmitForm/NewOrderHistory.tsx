import { Box, Grid, IconButton, styled } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  gradingOrderItemsState,
  newGradingOrderItemsState,
} from '@/common/modules/recoil/gradingOrder';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentItemIdState } from '@/specifics/grading/modules/recoil/apply';
import useSetCalculatedGradingOrder from '@/common/modules/hooks/useSetCalculatedGradingOrder';

function RenderRow(props: ListChildComponentProps) {
  const { index } = props;
  const { t } = useTranslation();

  const setCurrentItemId = useSetRecoilState(currentItemIdState);

  const gradingOrderItems = useRecoilValue(newGradingOrderItemsState);
  const item = gradingOrderItems[index];
  const { setCaculatedGradingOrder } = useSetCalculatedGradingOrder();

  const handleClickUpdateButton = useCallback(() => {
    setCurrentItemId(item?.id ?? -1);
  }, [item?.id, setCurrentItemId]);

  const handleClickDeleteButton = useCallback(() => {
    const isConfirmed = window.confirm(t('submit-108'));
    if (isConfirmed) {
      const filteredList = gradingOrderItems.filter(
        (orderItem) => orderItem.id !== item?.id
      );

      setCaculatedGradingOrder(filteredList);
    }
  }, [item?.id, setCaculatedGradingOrder, t, gradingOrderItems]);

  const descriptionText = useMemo(() => {
    if (item) {
      const year = item.year || '';
      const setName = item.setName || '';
      const description = item.description || '';
      const limitNumber = item.limitNumber || '';
      const cardNumber = item.cardNumber || '';
      const playerName = item.playerName || '';

      return `${year} ${setName} ${description} ${limitNumber} ${cardNumber} ${playerName}`;
    }
    return '';
  }, [item]);

  if (!item) {
    return <div />;
  }

  const isAuto = item.isAuto ? 'O' : 'X';
  const cardMinGrade = item.cardMinGrade === 0 ? 'X' : item.cardMinGrade;
  const casing = item.casing ? 'O' : 'X';

  return (
    <Box
      bgcolor="#fafafa"
      padding="4px 0px"
      justifyContent="center"
      display="flex"
      alignItems="center"
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        bgcolor="white"
        borderLeft="2px solid"
        justifyContent="space-around"
        paddingY="8px"
      >
        <GridItem item xs={1}>
          {index + 1}
        </GridItem>
        <GridItem item xs={4}>
          {descriptionText}
        </GridItem>
        <GridItem item xs={2}>
          {isAuto}
        </GridItem>
        <GridItem item xs={2}>
          {cardMinGrade}
        </GridItem>
        <GridItem item xs={2}>
          {casing}
        </GridItem>
        <GridItem item xs={1} display="flex">
          <IconButton sx={{ padding: 0 }} onClick={handleClickUpdateButton}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ padding: 0 }} onClick={handleClickDeleteButton}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </GridItem>
      </Grid>
    </Box>
  );
}

function NewOrderHistory() {
  const { t } = useTranslation();

  const gradingOrderItems = useRecoilValue(gradingOrderItemsState);

  return (
    <Box
      sx={{
        width: '100%',
        height: 290,
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="space-around"
        alignItems="center"
        marginTop="8px"
        paddingY="8px"
        borderBottom="1px solid rgba(0, 0, 0, 0.12)"
      >
        <GridItem item xs={1}>
          {t('submit-59')}
        </GridItem>
        <GridItem item xs={4}>
          {t('submit-60')}
        </GridItem>
        <GridItem item xs={2}>
          {t('submit-61')}
        </GridItem>
        <GridItem item xs={2}>
          {t('submit-62')}
        </GridItem>
        <GridItem item xs={2}>
          {t('submit-63')}
        </GridItem>
        <GridItem item xs={1} />
      </Grid>
      <List
        height={250}
        width="100%"
        itemSize={38}
        itemCount={gradingOrderItems.length}
        overscanCount={5}
      >
        {RenderRow}
      </List>
    </Box>
  );
}

const GridItem = styled(Grid)({
  fontSize: '0.7rem',
  textAlign: 'center',
});

export default NewOrderHistory;
