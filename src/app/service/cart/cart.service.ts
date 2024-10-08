import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8080/api/carts'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all carts
  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl);
  }

  // Get cart by ID
  getCartById(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.baseUrl}/${cartId}`);
  }

  // Create a new cart
  createCart(cartDTO: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.baseUrl, cartDTO, this.httpOptions);
  }

  // Update an existing cart
  updateCart(cartId: number, cartDTO: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.baseUrl}/${cartId}`, cartDTO, this.httpOptions);
  }

  // Delete a cart
  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cartId}`);
  }
}
