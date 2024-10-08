import { User } from './user.model';
import { CartItem } from './cart-item.model';

export class Cart {
  cartId?: number;
  user?: User;
  cartItems?: CartItem[];
}
