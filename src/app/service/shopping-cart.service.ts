import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartVisibleSubject = new BehaviorSubject<boolean>(false);
  cartVisible$ = this.cartVisibleSubject.asObservable();
  
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  private itemCountSubject = new BehaviorSubject<number>(0); // For item count
  
  cart$ = this.cartSubject.asObservable();
  itemCount$ = this.itemCountSubject.asObservable(); // Expose item count observable

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartSubject.next(this.cartItems);
    this.updateItemCount();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartSubject.next(this.cartItems);
    this.updateItemCount();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity; // Update quantity if it's more than 0
      } else {
        this.removeFromCart(productId); // Remove if quantity is 0 or less
      }
      this.cartSubject.next(this.cartItems);
    }
    this.updateItemCount();
  }

  private updateItemCount() {
    const totalCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.itemCountSubject.next(totalCount); // Update item count subject
  }

  getSubtotal() {
    const subtotal = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = subtotal * 0.18;
    return subtotal + gst;
  }

  getTotalWithGST() {
    const subtotal = this.getSubtotal();
    const gst = subtotal * 0.18;
    return subtotal + gst;
  }

  getTotalWithoutGST() {
    return this.getSubtotal();
  }

  openCart() {
    this.cartVisibleSubject.next(true);
  }

  closeCart() {
    this.cartVisibleSubject.next(false);
  }



}
