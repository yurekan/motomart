import { User } from './user.model';
import { Payment } from './payment.model';
import { OrderItem } from './order-item.model';

export class Order {
  orderId?: number;
  user?: User;
  orderDate?: string;
  status?: string;
  shippingAddress?: string;
  payment?: Payment;
  orderItems?: OrderItem[];
}
