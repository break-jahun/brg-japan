import { MenuItem, Select } from '@/common/components/Select';
import useGetGradedCardListQuery from '@/common/modules/apiHooks/useGetGradedCardListQuery';
import useOpen from '@/common/modules/hooks/useOpen';
import SearchRounded from '@mui/icons-material/SearchRounded';
import {
  Box,
  SelectProps,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEventHandler, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import CollectionCardItemMobile from '@/specifics/account/bridges/collection/CollectionCardItem/CollectionCardItemMobile';
import CollectionCardItemDesktop from '@/specifics/account/bridges/collection/CollectionCardItem/CollectionCardItemDesktop';
import ItemImageModal from '@/common/bridges/ImageModal/ItemImageModal';

type SelectFilter = 'playerName' | 'serial' | 'manualScore';

const CollectionListFilterForm = () => {
  const { t } = useTranslation();
  const [selectValue, setSelectValue] = useState<SelectFilter>('playerName');
  const [searchValue, setSearchValue] = useState('');
  const [src, setSrc] = useState('');
  const { open: isOpen, handleOpen, handleClose } = useOpen();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { data, isLoading } = useGetGradedCardListQuery();
  const gradedCards = useMemo(() => data?.data ?? [], [data?.data]);

  const handleOpenImageModal = (imgSrc?: string) => {
    if (!imgSrc) {
      return;
    }
    setSrc(imgSrc);
    handleOpen();
  };

  const handleSelectChange: SelectProps['onChange'] = (e) => {
    setSelectValue(e.target.value as SelectFilter);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value as string);
  };

  const gradeFieldResult = useCallback(() => {
    const isNumber = !Number.isNaN(Number(searchValue));

    if (isNumber && Number(searchValue) < 11) {
      return gradedCards.filter(
        (card) => card[selectValue] === Number(searchValue)
      );
    }

    if ('AUTHENTIC'.includes(searchValue.toUpperCase())) {
      return gradedCards.filter((card) => card[selectValue] === 11);
    }

    return [];
  }, [gradedCards, selectValue, searchValue]);

  const newGradedCards = useMemo(() => {
    if (searchValue.length > 0) {
      const isActivatedGradeField = selectValue === 'manualScore';

      if (isActivatedGradeField) {
        return gradeFieldResult();
      }

      return gradedCards.filter((card) => {
        return card[selectValue]
          ?.toString()
          .toUpperCase()
          .replace(/ /g, '')
          .includes(searchValue.toUpperCase().replace(/ /g, ''));
      });
    }

    return gradedCards;
  }, [gradeFieldResult, gradedCards, selectValue, searchValue]);

  const debouncedHandleInputChange = _.debounce(handleInputChange, 250);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        {!isMobile && <TitleWithTooltip />}
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            width: { xs: '100%', sm: 'auto' },
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Select
            value={selectValue}
            onChange={handleSelectChange}
            sx={{ width: '220px' }}
          >
            <MenuItem value="playerName">{t('collection-3')}</MenuItem>
            <MenuItem value="serial">{t('collection-4')}</MenuItem>
            <MenuItem value="manualScore">{t('collection-5')}</MenuItem>
          </Select>
          <TextField
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              startAdornment: <SearchRounded />,
            }}
            onChange={debouncedHandleInputChange}
          />
        </Box>
      </Box>
      {newGradedCards.map((item) => (
        <Box my={1} key={item.id}>
          {isMobile ? (
            <CollectionCardItemMobile
              item={item}
              handleOpenImageModal={handleOpenImageModal}
            />
          ) : (
            <CollectionCardItemDesktop
              item={item}
              handleOpenImageModal={handleOpenImageModal}
            />
          )}
        </Box>
      ))}
      <ItemImageModal isOpen={isOpen} handleClose={handleClose} src={src} />
    </>
  );
};

export default CollectionListFilterForm;

const TitleWithTooltip = () => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="row" gap="10px" alignItems="center">
      <Typography variant="body1" color="gray_700">
        {t('collection-1')}
      </Typography>
      <Tooltip
        enterTouchDelay={0}
        placement="bottom-start"
        title={t('collection-2')}
      >
        <Box
          bgcolor="black"
          color="white"
          fontWeight={900}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={(theme) => ({
            width: 14,
            height: 14,
            borderRadius: 7,
            fontSize: 10,
            [theme.breakpoints.up('sm')]: {
              width: 20,
              height: 20,
              borderRadius: 10,
              fontSize: 14,
            },
          })}
        >
          ?
        </Box>
      </Tooltip>
    </Box>
  );
};
