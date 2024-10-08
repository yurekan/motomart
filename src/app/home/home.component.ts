import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { EcommerceHomeComponent } from "./ecommerce-home/ecommerce-home.component";
import { EcommerceReviewComponent } from "./ecommerce-review/ecommerce-review.component";
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Router, RouterOutlet } from '@angular/router';
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, EcommerceHomeComponent, EcommerceReviewComponent, 
    ShoppingCartComponent, CommonModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isCheckoutPage: boolean = false;

  constructor(public shoppingCartService: ShoppingCartService, private router: Router){
    this.router.events.subscribe(() => {
      // Check if the current URL is the checkout page
      this.isCheckoutPage = this.router.url === '/checkout';
    });
  }

}
