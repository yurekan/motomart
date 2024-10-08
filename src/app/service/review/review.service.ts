import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewDTO } from '../../DTO/review.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8080/api/reviews'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all reviews
  getAllReviews(): Observable<ReviewDTO[]> {
    return this.http.get<ReviewDTO[]>(this.baseUrl);
  }

  // Get review by ID
  getReviewById(reviewId: number): Observable<ReviewDTO> {
    return this.http.get<ReviewDTO>(`${this.baseUrl}/${reviewId}`);
  }

  // Create a new review
  createReview(reviewDTO: ReviewDTO): Observable<ReviewDTO> {
    return this.http.post<ReviewDTO>(this.baseUrl, reviewDTO, this.httpOptions);
  }

  // Update an existing review
  updateReview(reviewId: number, reviewDTO: ReviewDTO): Observable<ReviewDTO> {
    return this.http.put<ReviewDTO>(`${this.baseUrl}/${reviewId}`, reviewDTO, this.httpOptions);
  }

  // Delete a review
  deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${reviewId}`);
  }
}
