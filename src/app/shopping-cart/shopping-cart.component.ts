import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',

})
export class ShoppingCartComponent {

  cartItems: CartItem[] = [];
  totalWithGST: number = 0;
  totalWithoutGST: number = 0;
  isVisible: boolean = false;
  sortOption: string = 'price'; // Default sort option

  constructor(private cartService: ShoppingCartService, private router: Router) {
    this.cartService.cartVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalWithGST = this.cartService.getTotalWithGST();
      this.totalWithoutGST = this.cartService.getTotalWithoutGST();
    });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  increaseQuantity(productId: number) {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
    }
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      this.removeItem(productId); // Remove item if quantity is reduced to 0
    }
  }

  sortCartItems() {
    if (this.sortOption === 'price') {
      this.cartItems.sort((a, b) => b.price - a.price); // Sort by price in descending order
    } else if (this.sortOption === 'quantity') {
      this.cartItems.sort((a, b) => b.quantity - a.quantity); // Sort by quantity in descending order
    }
  }

  onSortChange(option: string) {
    this.sortOption = option;
    this.sortCartItems(); // Sort items whenever the option changes
  }

  closeCart() {
    this.cartService.closeCart();
  }

  onCheckout() {
    setTimeout(() => {
      this.router.navigate(['/checkout']);
    }, 1000);
  }
}