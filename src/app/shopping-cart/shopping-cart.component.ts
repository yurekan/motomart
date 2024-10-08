import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',

})
export class ShoppingCartComponent {

  isVisible: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {
    this.shoppingCartService.cartVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  closeCart() {
    this.shoppingCartService.closeCart();
  }

  onCheckout() {
    setTimeout(() => {
      this.router.navigate(['/checkout']);
    }, 1000);
  }
}