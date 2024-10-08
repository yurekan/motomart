import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDTO } from '../../DTO/order.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/orders'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all orders
  getAllOrders(): Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(this.baseUrl);
  }

  // Get order by ID
  getOrderById(orderId: number): Observable<OrderDTO> {
    return this.http.get<OrderDTO>(`${this.baseUrl}/${orderId}`);
  }

  // Create a new order
  createOrder(orderDTO: OrderDTO): Observable<OrderDTO> {
    return this.http.post<OrderDTO>(this.baseUrl, orderDTO, this.httpOptions);
  }

  // Update an existing order
  updateOrder(orderId: number, orderDTO: OrderDTO): Observable<OrderDTO> {
    return this.http.put<OrderDTO>(`${this.baseUrl}/${orderId}`, orderDTO, this.httpOptions);
  }

  // Delete an order
  deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${orderId}`);
  }
}
