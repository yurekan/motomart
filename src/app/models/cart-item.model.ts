import { Accessory } from './accessory.model';
import { Cart } from './cart.model';

export class CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;

  constructor(){
    this.productId = 0;
    this.name = '';
    this.price = 0;
    this.quantity = 0;

  }
}
