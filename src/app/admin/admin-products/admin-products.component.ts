import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {
  createNewProduct() {
    console.log('Creating a new product...');
    // Logic for creating a new product can go here
  }

  deleteProduct(productName: string) {
    console.log(`Deleting ${productName}...`);
    // Logic for deleting the product can be implemented here
  }
}
