import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartVisible = new BehaviorSubject<boolean>(false);
  isCartVisible$ = this.cartVisible.asObservable();

  openCart() {
    this.cartVisible.next(true);
  }

  closeCart() {
    this.cartVisible.next(false);
  }
}
