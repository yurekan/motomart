import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { CartItem } from '../models/cart-item.model';
import { Checkout } from '../models/checkout.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'], // Note: 'styleUrls' should be plural
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalWithGST: number = 0;
  totalWithoutGST: number = 0;
  promoCode: string = '';
  discount: number = 0;
  checkout: Checkout = new Checkout();
  submittedBillingInfo: boolean = false; // To track if billing info has been submitted
  shippingAddresses: Array<{ fullAddress: string }> = []; // Array to hold shipping addresses

  // Define promo codes and their discounts
  discountCodes: { [key: string]: number } = {
    'SAVE10': 10, // 10% discount
    'SANSOUP69': 50, // 50% discount
  };

  constructor(private cartService: ShoppingCartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.totalWithGST = this.cartService.getTotalWithGST();
      this.totalWithoutGST = this.cartService.getTotalWithoutGST();
    });
  }

  // Getter for total price after discount
  get totalWithDiscount() {
    const discountAmount = this.totalWithGST * (this.discount / 100);
    return (this.totalWithGST - discountAmount).toFixed(2);
  }

  // Method to apply promo code
  applyPromoCode() {
    const discountPercentage = this.discountCodes[this.promoCode];
    if (discountPercentage) {
      this.discount = discountPercentage;
      alert(`Promo code applied! You get ${this.discount}% off.`);
    } else {
      alert('Invalid promo code.');
      this.discount = 0; // Reset discount if invalid
    }
  }

  // Method to handle billing form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedBillingInfo = true;
      // Create full address for shipping info
      const fullAddress = `${this.checkout.address}, ${this.checkout.city}, ${this.checkout.zipCode}, India`;
      this.shippingAddresses.push({ fullAddress });
      console.log('Billing Form Submitted!', this.checkout);
    } else {
      console.log('Form is invalid!');
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  // Method to edit an existing shipping address
  editAddress(index: number) {
    const address = this.shippingAddresses[index];
    this.checkout.address = address.fullAddress.split(', ')[0];
    this.checkout.city = address.fullAddress.split(', ')[1];
    this.checkout.zipCode = address.fullAddress.split(', ')[2];
    // Remove the address from the list to allow for editing
    this.shippingAddresses.splice(index, 1);
    this.submittedBillingInfo = false; // Reset the form for editing
  }

  onProceed() {
    const selectedPaymentMethod = this.getSelectedPaymentMethod(); // This function will retrieve the selected payment method

    // Prepare the data to pass
    const orderData = {
        billingName: this.checkout.name, // Add billing name
        shippingAddress: `${this.checkout.address}, ${this.checkout.city}, ${this.checkout.zipCode}, India`,
        paymentMethod: selectedPaymentMethod === 'card' ? 'Credit/Debit Card' : 'Cash on Delivery', // Add payment method
        cartItems: this.cartItems,
        total: this.totalWithDiscount // Include total price if necessary
    };

    if (selectedPaymentMethod === 'card') {
        this.router.navigate(['/card-payment'], { state: { orderData } }); // Navigate to card payment component
    } else {
        // For Cash on Delivery
        // Assuming this is in your CheckoutComponent after the form is submitted
        this.router.navigate(['/order-placed'], { state: { orderData: this.prepareOrderData() } });

    }
  }

  // Dummy function to determine selected payment method
  getSelectedPaymentMethod(): string {
      // Replace this logic with your actual method to get the selected payment method
      const cashOnDelivery = document.getElementById('pay-methodoption2') as HTMLInputElement;
      return cashOnDelivery.checked ? 'cash' : 'card';
  }

  prepareOrderData() {
    return {
        billingName: this.checkout.name,
        shippingAddress: `${this.checkout.address}, ${this.checkout.city}, ${this.checkout.zipCode}, India`,
        paymentMethod: this.getSelectedPaymentMethod(), // Define this method to get the selected payment method
        cartItems: this.cartItems,
        total: this.totalWithDiscount // Assuming you have a total calculated
    };
}

}
