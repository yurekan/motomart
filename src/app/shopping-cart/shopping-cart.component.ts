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
  animations: [
    trigger('cartAnimation', [
      state('closed', style({
        opacity: 0,
        transform: 'scale(0.9)'
      })),
      state('open', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('closed => open', [
        animate('300ms ease-in')
      ]),
      transition('open => closed', [
        animate('300ms ease-out')
      ])
    ])
  ]

})
export class ShoppingCartComponent {

  cartState = 'closed';

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { 
    // Subscribe to visibility changes to toggle animation state
    this.shoppingCartService.isCartVisible$.subscribe(isVisible => {
      this.cartState = isVisible ? 'open' : 'closed';
    });
  }

  closeCart() {
    this.shoppingCartService.closeCart(); // Use a service to toggle the cart visibility
  }

  onCheckout() {
    setTimeout(() => {
      this.router.navigate(['/checkout']);
    }, 1000);
  }
}
