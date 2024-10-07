import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {

  cancelOrder(orderName: string) {
    console.log(`Canceling order for ${orderName}...`);
    // Logic for canceling the order can be implemented here
  }
}
