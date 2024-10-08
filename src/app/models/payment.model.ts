import { Order } from './order.model';

export class Payment {
  paymentId?: number;
  order?: Order;
  amount?: number;
  paymentDate?: Date;
  paymentMethod?: string;
}
