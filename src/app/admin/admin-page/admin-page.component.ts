import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule,NgFor,RouterOutlet,RouterLink],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
 
  totalOrders = 120;        // Example data
  pendingOrders = 30;       // Example data
  deliveredOrders = 80;     // Example data
  totalRevenue = '$5,000';  // Example data


  cancelOrder(customerName: string) {
    console.log(`Order for ${customerName} has been canceled.`);
    // Here you can add logic to handle order cancellation
  }
  

  goTo(page: string) {
    console.log(`Navigating to ${page}`);
    // Here you can add logic to navigate to different sections if needed
  }
  
  goToHome(event: MouseEvent) {
    event.stopPropagation();
    console.log('Navigating to Home');
    // Logic for going to home
  }
  

  
  
}
