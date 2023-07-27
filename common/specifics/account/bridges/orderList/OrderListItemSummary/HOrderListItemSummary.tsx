import { CommonButton } from '@/common/components/Button';
import { HStack } from '@/common/components/HStack';
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

interface CustomKeyObject extends KeyObject {
  width?: number | string;
}

interface HOrderListItemSummaryProps {
  keys: Array<CustomKeyObject>;
  title: string;
  handleClick: (id: number) => void;
  isDetailHidden?: boolean;
}
type Props = Omit<ObjectTableDataProps, 'keys'> & HOrderListItemSummaryProps;

function HOrderListItemSummary({
  title,
  item,
  keys,
  handleClick,
  isDetailHidden = false,
}: Props) {
  const renderCell = (data: any) => {
    return data;
  };
  const { t } = useTranslation();
  const renderOrderPhoto = (src: string | undefined) => {
    if (src) {
      return (
        <TableCell
          sx={{
            border: 'none',
            width: '120px',
            minWidth: '120px',
          }}
          size="small"
          rowSpan={2}
        >
          <img src={src} width="100%" alt="order_item" />
        </TableCell>
      );
    }
    return null;
  };

  return (
    <HStack p="16px 16px" bgcolor="white" mt="16px">
      <Box flexGrow={1}>
        <Box mb="8px">
          <Typography color="system_blue_2" variant="h5" fontWeight={800}>
            {title}
          </Typography>
        </Box>
        <Table>
          <TableBody>
            <TableRow>
              {renderOrderPhoto(item.orderPhotoSrc as string)}
              {keys.map((key) => {
                return (
                  <TableCell
                    key={`header_${key.text}`}
                    padding="none"
                    sx={{
                      border: 'none',
                      marginLeft: '8px',
                      width: key.width,
                      padding: '6px 16px 6px 0px',
                      verticalAlign: 'top',
                      minWidth: '80px',
                    }}
                    size="small"
                    component={'th' as any}
                    scope="row"
                  >
                    <Typography variant="body2" fontWeight={700}>
                      {key.text}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
            <TableRow>
              {keys.map((key) => {
                return (
                  <TableCell
                    key={`cell_${key.text}`}
                    padding="none"
                    sx={{
                      border: 'none',
                      whiteSpace: 'pre-line',
                      verticalAlign: 'top',
                      padding: '0px 16px 6px 0px',
                    }}
                    size="small"
                  >
                    <Typography variant="body2">
                      {renderCell(item[key.value])}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {!isDetailHidden && (
        <Box display="flex" margin="auto">
          <CommonButton
            onClick={() => handleClick(item.id as number)}
            buttonType="GRAY"
          >
            {t('orderList-12')}
          </CommonButton>
        </Box>
      )}
    </HStack>
  );
}

export default HOrderListItemSummary;
