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
  constructor(public cartService: ShoppingCartService, private router: Router) { }
  
  itemCount: number = 0;

  ngOnInit() {
    this.cartService.itemCount$.subscribe(count => {
      this.itemCount = count; // Update item count when it changes
    });
  }

  openCart() {
    this.cartService.openCart();
  }

  openLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
