import { Product } from './product.model';

export class Variant {
  variantId?: number;
  product?: Product;
  variantName?: string;
  additionalPrice?: number;
}
