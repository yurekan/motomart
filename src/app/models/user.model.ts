import { Admin } from './admin.model';
import {Cart} from './cart.model';
import { Order } from './order.model';
import { Review } from './review.model';
export class User {
  userId?: number;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
  admin?: Admin;
  cart?: Cart;
  orders?: Order[];
  reviews?: Review[];
}
