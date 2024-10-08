import { Product } from './product.model';
import { Accessory } from './accessory.model';

export class ProductAccessory {
  id?: number;
  product?: Product;
  accessory?: Accessory;
}
