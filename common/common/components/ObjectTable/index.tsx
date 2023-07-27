import { KeyTableCell } from '@/common/components/ObjectTable/KeyTableCell';
import { ObjectTableDataProps } from '@/common/components/ObjectTable/useObjectTable';
import { ValueTableCell } from '@/common/components/ObjectTable/ValueTableCell';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

interface ObjectTableStyleProps {
  minWidth?: number;
  maxWidth?: number;
  headerWidth?: number;
}

type ObjectTableProps = ObjectTableStyleProps & ObjectTableDataProps;

function ObjectTable({
  minWidth = 240,
  maxWidth,
  headerWidth = 120,
  item,
  keys,
}: ObjectTableProps) {
  function getRenderedCell(
    value: any,
    renderCell?: (value: any) => React.ReactNode
  ) {
    if (renderCell) {
      return renderCell(value);
    }
    if (
      !renderCell &&
      (typeof value === 'object' || typeof value === 'boolean') &&
      value !== null
    ) {
      return JSON.stringify(value);
    }
    return value;
  }
  return (
    <TableContainer>
      <Table sx={{ minWidth, maxWidth, tableLayout: 'fixed', border: 'none' }}>
        <TableBody>
          {keys.map((key) => {
            if (Array.isArray(key)) {
              return (
                <TableRow key={`row_${key[0].text}`}>
                  <KeyTableCell
                    size="small"
                    component={'th' as any}
                    scope="row"
                    sx={{ width: headerWidth, whiteSpace: 'pre-line' }}
                  >
                    {key[0].text}
                  </KeyTableCell>
                  <ValueTableCell size="small">
                    {getRenderedCell(item[key[0].value], key[0].renderCell)}
                  </ValueTableCell>
                  <KeyTableCell
                    size="small"
                    component={'th' as any}
                    scope="row"
                    sx={{ width: headerWidth }}
                  >
                    {key[1].text}
                  </KeyTableCell>
                  <ValueTableCell size="small">
                    {getRenderedCell(item[key[1].value], key[1].renderCell)}
                  </ValueTableCell>
                </TableRow>
              );
            }
            return (
              <TableRow key={`row_${key.text}`}>
                <KeyTableCell
                  size="small"
                  component={'th' as any}
                  scope="row"
                  sx={{ width: headerWidth, whiteSpace: 'pre-line' }}
                >
                  {key.textElement ? (
                    key.textElement
                  ) : (
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      color={key.color || 'black'}
                    >
                      {key.text}
                    </Typography>
                  )}
                </KeyTableCell>
                <ValueTableCell size="small" colSpan={3}>
                  {getRenderedCell(item[key.value], key.renderCell)}
                </ValueTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ObjectTable;
