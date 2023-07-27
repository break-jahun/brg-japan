import {
  MenuItem,
  menuItemClasses,
  outlinedInputClasses,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { GradingScaleListItemType } from '@/specifics/grading/bridges/NewGradingScale';

interface GradeSelectProps {
  grade: string;
  handleChange: (event: SelectChangeEvent) => void;
  gradingScaleList: GradingScaleListItemType[];
}

function GradeSelect({
  grade,
  handleChange,
  gradingScaleList,
}: GradeSelectProps) {
  return (
    <Select
      value={grade}
      fullWidth
      sx={(theme) => ({
        marginTop: '40px',
        backgroundColor: 'white',

        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: theme.palette.secondary_10,
          },
      })}
      size="small"
      onChange={handleChange}
      IconComponent={ArrowDropDownRoundedIcon}
    >
      {gradingScaleList.map((item) => {
        return (
          <MenuItem
            key={item.id}
            value={item.title}
            sx={(theme) => ({
              [`&.${menuItemClasses.root}.${menuItemClasses.selected}`]: {
                backgroundColor: theme.palette.secondary_90,
              },
            })}
          >
            {item.title}
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default GradeSelect;
