import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartVisibleSubject = new BehaviorSubject<boolean>(false);
  cartVisible$ = this.cartVisibleSubject.asObservable();

  openCart() {
    this.cartVisibleSubject.next(true);
  }

  closeCart() {
    this.cartVisibleSubject.next(false);
  }
}
