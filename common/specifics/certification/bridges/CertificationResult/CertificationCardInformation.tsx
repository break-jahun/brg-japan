import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import useGetRouterQuery from '@/common/modules/hooks/useGetRouterQuery';
import useItemsBySerialQuery, {
  useItemsBySerialQueryType,
} from '@/specifics/certification/modules/apiHooks/useItemsBySerialQuery';
import { Fragment } from 'react';
import { objectEntries } from '@/common/types/objectEntriesType';

type ColumnItemType = {
  [key in keyof Pick<
    useItemsBySerialQueryType,
    | 'brand'
    | 'year'
    | 'setName'
    | 'description'
    | 'cardNumber'
    | 'playerName'
    | 'manualScoreText'
    | 'autoScoreText'
  >]: string;
};

const COLUMN_ITEM_DATA: ColumnItemType = {
  brand: 'Brand',
  year: 'Year',
  setName: 'Set',
  description: 'Description',
  cardNumber: 'Card Number',
  playerName: 'Player Name',
  manualScoreText: 'Grade',
  autoScoreText: 'Auto Grade',
};

const CertificationCardInformation = () => {
  const { t } = useTranslation();

  const serial = useGetRouterQuery('serial');
  const { data } = useItemsBySerialQuery(serial);

  if (!data) {
    return <div />;
  }

  const getCountText = (count: number) => {
    let resultText = '-';
    if (count && count !== -1) resultText = String(count);
    return resultText;
  };

  const populationCount = getCountText(data.population);
  const populationHigherCount = getCountText(data.populationHigher);

  return (
    <Box
      sx={{
        marginTop: '80px',
      }}
    >
      <Typography color="gray_700" variant="h5">
        {t('certification-10')}
      </Typography>
      <ColumnBox>
        {objectEntries(COLUMN_ITEM_DATA).map(([key, value]) => (
          <Fragment key={key}>
            <Typography variant="subtitle1" color="gray_700" textAlign="end">
              {value}
            </Typography>
            <Box maxWidth="65%">
              <Typography color="#00325B" variant="h5" textAlign="start">
                {data[key]}
              </Typography>
            </Box>
          </Fragment>
        ))}
      </ColumnBox>
      <RawBox>
        <CardInformationRow
          name="Population"
          value={populationCount}
          description={t('certification-11')}
        />
        <CardInformationRow
          name="Population Higher"
          value={populationHigherCount}
          description={t('certification-12')}
        />
      </RawBox>
    </Box>
  );
};

export default CertificationCardInformation;

const ColumnBox = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto',
  alignItems: 'center',
  marginTop: '40px',
  textAlign: 'center',
  gap: '24px',
});

const RawBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  marginTop: '40px',
});

interface RowProps {
  name: string;
  value: string | number | undefined;
  description: string;
}

const CardInformationRow = ({ name, value, description }: RowProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gridColumnEnd: 'span 2',
      }}
    >
      <Box sx={{ marginBottom: '4px' }}>
        <Typography variant="subtitle1" color="gray_700">
          {name}
        </Typography>
        <Typography variant="caption" color="gray_700">
          {description}
        </Typography>
      </Box>
      <Typography color="secondary_20" variant={isMobile ? 'h6' : 'h5'}>
        {value}
      </Typography>
    </Box>
  );
};
