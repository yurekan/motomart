import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  shippingDetails = { name: '', address: '' };
  totalPrice = 100; // Example price

  constructor(private router: Router) {}

  goToPayment() {
    this.router.navigate(['/payment'], {
      queryParams: { total: this.totalPrice, shipping: JSON.stringify(this.shippingDetails) }
    });
  }
}
