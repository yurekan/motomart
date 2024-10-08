import { Showroom } from './showroom.model';
import { Category } from './category.model';
import { Brand } from './brand.model';
import { Specification } from './specification.model';
import { Variant } from './variant.model';
import { ProductAccessory } from './product-accessory.model';
import { Review } from './review.model';
import { OrderItem } from './order-item.model';

export class Product {
  productId?: number;
  name?: string;
  description?: string;
  price?: number;
  showroom?: Showroom;
  category?: Category;
  brand?: Brand;
  specifications?: Specification[];
  variants?: Variant[];
  imageUrl?:string;
  productAccessories?: ProductAccessory[];
  reviews?: Review[];
  orderItems?: OrderItem[];
}
