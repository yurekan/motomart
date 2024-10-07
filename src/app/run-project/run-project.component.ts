import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { AccessoriesHomeComponent } from "../accessories-home/accessories-home.component";
import { FooterComponent } from "../footer/footer.component";
import { ShoppingCartService } from '../service/shopping-cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-run-project',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavbarComponent, ShoppingCartComponent, AccessoriesHomeComponent, FooterComponent, CommonModule],
  templateUrl: './run-project.component.html',
  styleUrl: './run-project.component.css'
})
export class RunProjectComponent {
  isCheckoutPage: boolean = false;

  constructor(public shoppingCartService: ShoppingCartService, private router: Router){
    this.router.events.subscribe(() => {
      // Check if the current URL is the checkout page
      this.isCheckoutPage = this.router.url === '/checkout';
    });
  }
}
