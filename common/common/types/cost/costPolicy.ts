import { CurrencyType } from '@/common/types/grading/gradingOrder';
import { CostAdditionalAttributes } from './costAdditional';
import { ProductCardCaseAttributes } from '../product/productCardCase';
import { ProductCardCategoryAttributes } from '../product/productCardCategory';
import { ProductServiceAttributes } from '../product/productService';
import { Country, SupportRegionAttributes } from '../supportRegion';

interface ProductCardCategory extends ProductCardCategoryAttributes {
  productCardCase: ProductCardCaseAttributes[];
}

export interface CostPolicy extends SupportRegionAttributes {
  productService: ProductServiceAttributes[];
  costAdditional: CostAdditionalAttributes[];
  productCardCategory: ProductCardCategory[];
  currency: CurrencyType;
  region: Country;
}
