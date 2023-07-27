import { productServicePriceState } from '@/common/modules/recoil/costPolicy';
import { orderTypeState } from '@/common/modules/recoil/gradingOrder';
import { GradingOrderType } from '@/common/types/grading/gradingOrder';
import useExpressRecommendationParser from '@/specifics/grading/modules/hooks/parser/useExpressRecommendationParser';
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useCallback, useMemo, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import SummaryTableLayout from '@/common/components/SummaryTableLayout';

const ExpressRecommendation = () => {
  const [orderType, setOrderType] = useRecoilState(orderTypeState);
  const regularPrice = useRecoilValue(productServicePriceState('REG'));
  const expressPrice = useRecoilValue(productServicePriceState('EXP'));

  const differenceCostByOrderType = useMemo(() => {
    if (!expressPrice || !regularPrice) {
      return 0;
    }

    return expressPrice - regularPrice;
  }, [expressPrice, regularPrice]);

  const { notice1, notice2, express, orderByExpress, yes, no } =
    useExpressRecommendationParser(differenceCostByOrderType);

  const handleChangeGradingOrderType = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOrderType(event.target.value as GradingOrderType);
    },
    [setOrderType]
  );

  const isRegularOrder = useRef(orderType === 'REG');

  if (!isRegularOrder.current) {
    return null;
  }

  return (
    <SummaryTableLayout>
      <Box p={1} m={1}>
        <Typography align="center" gutterBottom variant="caption" component="p">
          {notice1}
        </Typography>
        <Typography align="center" gutterBottom variant="caption" component="p">
          <Typography variant="caption" color="red" fontWeight={700}>
            {express}
          </Typography>
          {notice2}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          fontWeight={700}
        >
          {orderByExpress}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={1}
        >
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="gradingOrderType"
              value={orderType}
              onChange={handleChangeGradingOrderType}
            >
              <FormControlLabel
                value="EXP"
                control={<Radio color="primary" size="small" />}
                label={<Typography variant="body2">{yes}</Typography>}
              />
              <FormControlLabel
                value="REG"
                control={<Radio color="primary" size="small" />}
                label={<Typography variant="body2">{no}</Typography>}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </SummaryTableLayout>
  );
};

export default ExpressRecommendation;
