import { Component } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public shoppingCartService: ShoppingCartService, private router: Router) { }
  
  openCart() {
    this.shoppingCartService.openCart();
  }

  openLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
