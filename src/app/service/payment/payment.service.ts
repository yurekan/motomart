import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentDTO } from '../../DTO/payment.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8080/api/payments'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all payments
  getAllPayments(): Observable<PaymentDTO[]> {
    return this.http.get<PaymentDTO[]>(this.baseUrl);
  }

  // Get payment by ID
  getPaymentById(paymentId: number): Observable<PaymentDTO> {
    return this.http.get<PaymentDTO>(`${this.baseUrl}/${paymentId}`);
  }

  // Create a new payment
  createPayment(paymentDTO: PaymentDTO): Observable<PaymentDTO> {
    return this.http.post<PaymentDTO>(this.baseUrl, paymentDTO, this.httpOptions);
  }

  // Update an existing payment
  updatePayment(paymentId: number, paymentDTO: PaymentDTO): Observable<PaymentDTO> {
    return this.http.put<PaymentDTO>(`${this.baseUrl}/${paymentId}`, paymentDTO, this.httpOptions);
  }

  // Delete a payment
  deletePayment(paymentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${paymentId}`);
  }
}
