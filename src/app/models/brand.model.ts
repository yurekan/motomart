import { Product } from './product.model';
import { Accessory } from './accessory.model';

export class Brand {
  brandId?: number;
  name?: string;
  products?: Product[];
  accessories?: Accessory[];
}
