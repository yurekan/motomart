import { Product } from './product.model';

export class Specification {
  specificationId?: number;
  product?: Product;
  specs?: string;
  value?: string;
  categorySpecificInfo?: string;
}
