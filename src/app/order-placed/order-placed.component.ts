import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-placed',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-placed.component.html',
    styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
    orderData: any;

    constructor(private router: Router) {}

    ngOnInit() {
        this.orderData = this.router.getCurrentNavigation()?.extras.state?.['orderData'];
        console.log('Order Data:', this.orderData);
        
        // Handle case when orderData is undefined
        if (!this.orderData) {
            // Redirect or show an error message
            console.error('No order data found!');
        }
    }
}
