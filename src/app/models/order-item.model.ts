import { Order } from './order.model';
import { Product } from './product.model';

export class OrderItem {
  orderItemId?: number;
  order?: Order;
  product?: Product;
  quantity?: number;
  priceAtPurchase?: number;
}
