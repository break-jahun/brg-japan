import { CommonButton } from '@/common/components/Button';
import {
  KeyObject,
  ObjectTableDataProps,
} from '@/common/components/ObjectTable/useObjectTable';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface VOrderListItemSummaryProps {
  keys: Array<KeyObject>;
  title: string;
  message: string;
  handleClick: (id: number) => void;
  isDetailHidden?: boolean;
}
type Props = Omit<ObjectTableDataProps, 'keys'> & VOrderListItemSummaryProps;

function VOrderListItemSummary({
  title,
  item,
  keys,
  message,
  handleClick,
  isDetailHidden = false,
}: Props) {
  const renderCell = (data: any) => {
    return data;
  };
  const renderOrderPhoto = (src: string) => {
    if (src) {
      return (
        <Box>
          <img src={src} width="100%" alt="order_item" />
        </Box>
      );
    }
    return null;
  };
  const { t } = useTranslation();
  return (
    <Box p="24px 16px 16px 16px" bgcolor="white" mt="16px">
      <Box textAlign="center" mb="12px">
        <Typography color="system_blue_2" variant="h4" fontWeight={800}>
          {title}
        </Typography>
      </Box>
      {renderOrderPhoto(item.orderPhotoSrc as string)}
      <Table>
        <TableBody>
          {keys.map((key) => {
            return (
              <TableRow key={`row_${key.text}`}>
                <TableCell
                  sx={{ border: 'none', padding: '4px 0 4px 0' }}
                  size="small"
                  component={'th' as any}
                  scope="row"
                >
                  <Typography variant="body1" fontWeight={700}>
                    {key.text}
                  </Typography>
                </TableCell>
                <TableCell
                  padding="none"
                  sx={{ border: 'none', textAlign: 'right' }}
                  size="small"
                >
                  <Typography variant="body1">
                    {renderCell(item[key.value])}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Box p="16px 8px 8px 8px" textAlign="center" whiteSpace="pre-line">
        <Typography variant="body1">{message}</Typography>
      </Box>
      {!isDetailHidden && (
        <Box display="flex" justifyContent="flex-end" width={1} mt="8px">
          <CommonButton
            onClick={() => handleClick(item.id as number)}
            buttonType="GRAY"
            fullWidth
          >
            {t('general/view-details')}
          </CommonButton>
        </Box>
      )}
    </Box>
  );
}

export default VOrderListItemSummary;
