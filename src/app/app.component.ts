import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ShoppingCartService } from './service/shopping-cart.service';
import { AccessoriesHomeComponent } from "./accessories-home/accessories-home.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbCarouselModule, CommonModule, NavbarComponent, FooterComponent, ShoppingCartComponent, AccessoriesHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{
  
  title = 'motomart';
  isCheckoutPage: boolean = false;
  private subscription: Subscription | null = null; // Initialize with null

  constructor(public shoppingCartService: ShoppingCartService, private router: Router){
    this.router.events.subscribe(() => {
      // Check if the current URL is the checkout page
      this.isCheckoutPage = this.router.url === '/checkout';
    });
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Check if subscription exists before unsubscribing
    }
  }
}
